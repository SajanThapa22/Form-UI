"use client";

import ButtonCancel from "@/components/ButtonCancel";
import ButtonSubmit from "@/components/ButtonSubmit";
import FormLabelInput from "@/components/FormComponent";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
import Separator from "@/components/Separator";
import Title from "@/components/Title";
import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";

export interface FormData {
  companyName: string;
  companyUrl: string;
  companyAddress: string;
  firstName: string;
  lastName: string;
  zipCode: number;
  designation: string;
  email: string;
  contactNo: number;
  subscriptionPlan: string;
  subscriptionType: string;
  subscriptionFees: string;
  bankName: string;
  transactionId: string;
  paymentDate: Date;
  amount: string;
  paymentStatus: string;
}

const subscriptionPlans = [
  { value: "basic", label: "Basic Plan" },
  { value: "standard", label: "Standard Plan" },
  { value: "premium", label: "Premium Plan" },
  { value: "enterprise", label: "Enterprise Plan" },
];

const subscriptionTypes = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "Quarterly" },
  { id: "yearly", label: "Yearly" },
];

const paymentStatuses = [
  { id: "pending", label: "Pending" },
  { id: "completed", label: "Completed" },
  { id: "failed", label: "Failed" },
  { id: "refunded", label: "Refunded" },
];

const page = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "all" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log();
  };

  return (
    <div className="px-10 md:px-[100px] xl:px-[135px] py-[60px] flex flex-col">
      <Title title="onboarding" />

      <form>
        <Title title="company information" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          <FormLabelInput htmlFor="companyName" label="company name">
            <FormInput
              refName="companyName"
              required={true}
              inputId="companyName"
              inputType="text"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="companyUrl" label="company url">
            <FormInput
              refName="companyUrl"
              required={true}
              inputId="companyUrl"
              inputType="text"
              placeholder="https://"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="companyAddress" label="company address">
            <FormInput
              refName="companyAddress"
              required={true}
              inputId="companyAddress"
              inputType="text"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="firstName" label="first name">
            <FormInput
              refName="firstName"
              required={true}
              inputId="firstName"
              inputType="text"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="lastName" label="last name">
            <FormInput
              refName="lastName"
              required={true}
              inputId="lastName"
              inputType="text"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="zipCode" label="ZIP code">
            <FormInput
              refName="zipCode"
              required={true}
              inputId="zipCode"
              inputType="number"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="designation" label="designation">
            <FormInput
              refName="designation"
              required={true}
              inputId="designation"
              inputType="text"
              placeholder="choose multi location"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="emailAddress" label="email address">
            <FormInput
              refName="emailAddress"
              required={true}
              inputId="emailAddress"
              inputType="text"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="contactNo" label="contact no">
            <FormInput
              refName="contactNo"
              required={true}
              inputId="contactNo"
              inputType="number"
            />
          </FormLabelInput>
        </div>

        <Separator />

        <Title title="subscriptions" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          <FormLabelInput htmlFor="subscriptionPlan" label="subscription plan">
            <FormSelect
              id="subscriptionPlan"
              refName="subscriptionPlan"
              required={true}
              options={subscriptionPlans}
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="subscriptionType" label="subscription type">
            <FormSelect
              id="subscriptionType"
              refName="subscriptionType"
              required={true}
              options={subscriptionTypes}
            >
              <pre className="text-red-500 text-nowrap absolute bottom-0 translate-y-8 capitalize font-semibold text-[12px]">
                {` Start date    ~   End date`}
              </pre>
            </FormSelect>
          </FormLabelInput>

          <FormLabelInput htmlFor="subscriptionFees" label="subscription fees">
            <FormInput
              refName="subscriptionFees"
              required={true}
              inputId="subscriptionFees"
              inputType="number"
            />
          </FormLabelInput>
        </div>

        <Separator />

        <Title title="payment information" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          <FormLabelInput htmlFor="bankName" label="bank name">
            <FormInput
              refName="bankName"
              required={true}
              inputId="bankName"
              inputType="text"
              placeholder="choose multi location"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="transactionId" label="transaction iD">
            <FormInput
              refName="transactionId"
              required={true}
              inputId="transactionId"
              inputType="number"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="paymentDate" label="payment date">
            <FormInput
              refName="paymentDate"
              required={true}
              inputId="paymentDate"
              inputType="date"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="amount" label="amount">
            <FormInput
              refName="amount"
              required={true}
              inputId="amount"
              inputType="number"
            />
          </FormLabelInput>

          <FormLabelInput htmlFor="paymentStatus" label="payment status">
            <FormSelect
              id="paymentStatus"
              refName="paymentStatus"
              required={true}
              options={paymentStatuses}
            />
          </FormLabelInput>
        </div>

        <div className="mt-[50px] w-fit ml-auto flex gap-5">
          <ButtonCancel text="cancel" />
          <ButtonSubmit disabled={!isValid} text="register" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default page;
