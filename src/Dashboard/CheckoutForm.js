import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const { price, name, email, _id } = order;
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('')
    const [transectionId, setTransectionId] = useState('');
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        if (price) {

            fetch('https://immense-temple-92933.herokuapp.com/create-payment-intent', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.clientSecret) {
                        setClientSecret(data.clientSecret)
                    }
                })
        }
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        })
        setCardError(error?.message || '')
        setProcessing(true);
        // payment comfirm
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(error?.message)
            setSuccess('');
            setProcessing(false)
        }
        else {
            setTransectionId(paymentIntent.id)
            setSuccess('Congrat! Your payment success')
            setCardError('');
            setProcessing(false)

            // stored payment on database
            const payment = {
                orderId: _id,
                transectionId: paymentIntent.id,
            }

            fetch(`https://immense-temple-92933.herokuapp.com/booked/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ payment })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast('Your payment successful')
                    }
                })
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm mt-2" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500">{cardError}</p>
            }
            {
                success && <div>
                    <p className="text-green-500">{success}</p>
                    <p className="text-green-500">Trans Id: {transectionId}</p>
                </div>
            }
        </>
    )
}
export default CheckoutForm;