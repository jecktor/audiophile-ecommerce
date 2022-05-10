import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import type { t_CheckoutForm } from '../typings/form';

import { Button, Success } from '../components';

const Checkout = () => {
  const router = useRouter();
  const [purchased, setPurchased] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<t_CheckoutForm>();
  const {
    state: { cart },
  } = useStateContext();

  const onSubmit: SubmitHandler<t_CheckoutForm> = async data => {
    console.table(data);
    setPurchased(true);
  };

  const grandTotal = cart.totalPrice + cart.vatCost + cart.shippingCost;

  return (
    <>
      <Head>
        <title>Checkout | Audiophile</title>
      </Head>
      <div className="bg-[#191919] h-24"></div>
      {cart.totalQuantities < 1 ? (
        <div className="h-screen flex items-center justify-center mx-auto max-w-xs md:max-w-3xl lg:max-w-6xl lg:justify-start">
          <h1 className="font-bold tracking-wide text-5xl lg:text-6xl">
            Your cart is empty.
          </h1>
        </div>
      ) : (
        <>
          <div className="mx-auto max-w-xs md:max-w-3xl lg:max-w-6xl">
            <button
              type="button"
              className="my-10 text-black/50 tracking-wide hover:opacity-100 hover:text-primary"
              onClick={() => router.back()}
            >
              Go Back
            </button>
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
              <form
                className="p-10 shadow-xl rounded-lg lg:w-2/3"
                id="checkout-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h1 className="uppercase text-3xl font-bold tracking-wide lg:text-4xl">
                  Checkout
                </h1>
                <p className="mb-4 mt-8 uppercase font-bold text-sm text-primary tracking-wide">
                  Billing Details
                </p>
                <div className="lg:flex lg:justify-between lg:items-center">
                  <label className="block mb-4">
                    {errors.name && (
                      <strong className="text-xs text-red-500">
                        Please enter a valid name.
                      </strong>
                    )}
                    <span className="block mb-1 text-xs font-bold">Name</span>
                    <input
                      {...register('name', {
                        required: true,
                        minLength: 5,
                        pattern: /(?!^$)([^\s])/gi,
                      })}
                      className="w-full p-4 outline-none border border-black/20 rounded-lg focus:border-primary"
                      type="text"
                      id="name"
                      placeholder="John Smith"
                    />
                  </label>
                  <label className="block mb-4">
                    {errors.email && (
                      <strong className="text-xs text-red-500">
                        Please enter a valid email.
                      </strong>
                    )}
                    <span className="block mb-1 text-xs font-bold">
                      Email Address
                    </span>
                    <input
                      {...register('email', {
                        required: true,
                        pattern: /\b[\w-]+@[\w-]+\w{2,4}\b/gi,
                      })}
                      className="w-full p-4 outline-none border border-black/20 rounded-lg focus:border-primary"
                      type="email"
                      id="email"
                      placeholder="example@domain.com"
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-4 lg:w-[254px]">
                    {errors.phone && (
                      <strong className="text-xs text-red-500">
                        Please enter a valid phone number.
                      </strong>
                    )}
                    <span className="block mb-1 text-xs font-bold">
                      Phone Number
                    </span>
                    <input
                      {...register('phone', {
                        required: true,
                        maxLength: 10,
                        pattern:
                          /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/gi,
                      })}
                      className="w-full p-4 outline-none border border-black/20 rounded-lg focus:border-primary"
                      type="tel"
                      id="phone"
                      placeholder="202-555-7777"
                    />
                  </label>
                </div>
                <p className="mb-4 mt-8 uppercase font-bold text-sm text-primary tracking-wide">
                  Shipping Info
                </p>
                <div>
                  <label className="block mb-4">
                    {errors.address && (
                      <strong className="text-xs text-red-500">
                        Please enter a valid address.
                      </strong>
                    )}
                    <span className="block mb-1 text-xs font-bold">
                      Your Address
                    </span>
                    <input
                      {...register('address', {
                        required: true,
                        minLength: 10,
                        pattern: /(?!^$)([^\s])/gi,
                      })}
                      className="w-full p-4 outline-none border border-black/20 rounded-lg focus:border-primary"
                      type="address"
                      id="address"
                      placeholder="1137 SE Morrison St"
                    />
                  </label>
                </div>
                <div className="lg:flex lg:justify-between lg:items-center">
                  <label className="block mb-4">
                    {errors.zipCode && (
                      <strong className="text-xs text-red-500">
                        Please enter a valid zip code.
                      </strong>
                    )}
                    <span className="block mb-1 text-xs font-bold">
                      ZIP Code
                    </span>
                    <input
                      {...register('zipCode', {
                        required: true,
                        maxLength: 5,
                        pattern: /[0-9]{5}(-[0-9]{4})?/g,
                      })}
                      className="w-full p-4 outline-none border border-black/20 rounded-lg focus:border-primary"
                      type="tel"
                      id="zipCode"
                      placeholder="10001"
                    />
                  </label>
                  <label className="block mb-4">
                    {errors.city && (
                      <strong className="text-xs text-red-500">
                        Please enter a valid city.
                      </strong>
                    )}
                    <span className="block mb-1 text-xs font-bold">City</span>
                    <input
                      {...register('city', {
                        required: true,
                        minLength: 2,
                        pattern: /(?!^$)([^\s])/gi,
                      })}
                      className="w-full p-4 outline-none border border-black/20 rounded-lg focus:border-primary"
                      type="text"
                      id="city"
                      placeholder="Portland, Oregon"
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-4 lg:w-[254px]">
                    {errors.country && (
                      <strong className="text-xs text-red-500">
                        Please enter a valid country.
                      </strong>
                    )}
                    <span className="block mb-1 text-xs font-bold">
                      Country
                    </span>
                    <input
                      {...register('country', {
                        required: true,
                        minLength: 2,
                        pattern: /(?!^$)([^\s])/gi,
                      })}
                      className="w-full p-4 outline-none border border-black/20 rounded-lg focus:border-primary"
                      type="text"
                      id="country"
                      placeholder="United States"
                    />
                  </label>
                </div>
                <p className="mb-4 mt-8 uppercase font-bold text-sm text-primary tracking-wide">
                  Payment Details
                </p>
                <div className="lg:flex lg:justify-between">
                  {errors.payment && (
                    <strong className="text-xs text-red-500">
                      Please select an option.
                    </strong>
                  )}
                  <label className="block mb-4 text-xs font-bold">
                    Payment Method
                  </label>
                  <div>
                    <label className="block w-full mb-3 p-4 outline-none border border-black/20 cursor-pointer rounded-lg lg:w-[254px]">
                      <input
                        {...register('payment', { required: true })}
                        type="radio"
                        id="payment"
                        value="pay-online"
                      />
                      <span className="ml-4 font-bold text-sm">Pay Online</span>
                    </label>
                    <label className="block w-full p-4 outline-none border border-black/20 cursor-pointer rounded-lg lg:w-[254px]">
                      <input
                        {...register('payment', { required: true })}
                        type="radio"
                        id="payment"
                        value="pay-delivery"
                      />
                      <span className="ml-4 font-bold text-sm">
                        Cash on Delivery
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row">
                  <div className="relative min-w-[3rem] w-12 h-12">
                    <Image
                      src="/shared/icon-cash-on-delivery.svg"
                      alt=""
                      aria-hidden="true"
                      layout="fill"
                    />
                  </div>
                  <p className="break-words">
                    The &apos;Cash on Delivery&apos; option enables you to pay
                    in cash when our delivery courier arrives at your residence.
                    Just make sure your address is correct so that your order
                    will not be cancelled.
                  </p>
                </div>
              </form>
              <div className="p-10 bg-white shadow-xl rounded-lg lg:w-1/3 lg:h-fit">
                <h2 className="uppercase text-xl font-bold tracking-wide lg:text-2xl">
                  Summary
                </h2>
                <ul>
                  {cart.cartItems.map(item => (
                    <li
                      key={item._id}
                      className="flex gap-4 my-6 lg:justify-between"
                    >
                      <div className="relative w-16 h-16 p-2 bg-[#F1F1F1] rounded-lg overflow-hidden">
                        <Image
                          src={urlFor(item.image).url()}
                          alt=""
                          aria-hidden="true"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="flex flex-col w-1/2 grow justify-center font-bold uppercase tracking-wide">
                        <p>{item.name}</p>
                        <p className="text-black/50">
                          {item.price.toLocaleString()}
                        </p>
                      </div>
                      <p className="text-black/50 font-bold">
                        x{item.quantity}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-2">
                  <strong className="uppercase text-black/50 font-medium">
                    Total
                  </strong>
                  <p className="font-bold tracking-wide">{`$ ${cart.totalPrice.toLocaleString()}`}</p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <strong className="uppercase text-black/50 font-medium">
                    Shipping
                  </strong>
                  <p className="font-bold tracking-wide">{`$ ${cart.shippingCost.toLocaleString()}`}</p>
                </div>
                <div className="flex items-center justify-between">
                  <strong className="uppercase text-black/50 font-medium">
                    VAT (Included 20%)
                  </strong>
                  <p className="font-bold tracking-wide">{`$ ${cart.vatCost.toLocaleString()}`}</p>
                </div>
                <div className="flex items-center justify-between my-8">
                  <strong className="uppercase text-black/50 font-medium">
                    Grand Total
                  </strong>
                  <p className="text-primary font-bold tracking-wide">{`$ ${grandTotal.toLocaleString()}`}</p>
                </div>
                <Button
                  isLarge
                  type="submit"
                  form="checkout-form"
                  color="main"
                  content="Send order"
                />
              </div>
            </div>
          </div>
          {purchased && <Success />}
        </>
      )}
    </>
  );
};

export default Checkout;
