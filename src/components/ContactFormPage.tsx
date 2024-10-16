"use client";
import React from "react";
import { useForm, Control } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string(),
});

interface FormValues {
  message: string;
  fullname: string;
  email: string;
}
const ContactFormPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = () => {};
  return (
    <>
      <div className="flex justify-center items-center pt-72">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-96">
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
                    <Input placeholder="Your message" {...field} />
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
