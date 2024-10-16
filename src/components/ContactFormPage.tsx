"use client";
import React from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const ContactFormPage = () => {
  // Using the custom hook
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useContactForm();
  const form = useContactForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex justify-center items-center  pt-60 sm:pt-72 ">
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 w-80 sm:w-96"
          >
            {/* Fullname field */}
            <FormField
              name="fullname"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage>{errors.fullname?.message}</FormMessage>
                </FormItem>
              )}
            />

            {/* Email field */}
            <FormField
              name="email"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage>{errors.email?.message}</FormMessage>
                </FormItem>
              )}
            />

            {/* Message field */}
            <FormField
              name="message"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message"
                      {...field}
                      className="w-80 sm:w-96"
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage>{errors.message?.message}</FormMessage>
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ContactFormPage;
