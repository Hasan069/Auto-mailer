"use client";
import React from "react";
import { useForm, useWatch, Control } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { test } from "@/validation/test";
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

type FormValues = {
  fullName: string;
  email: string;
};

const ContactFormPage = () => {
  const form = useForm({
    resolver: zodResolver(test),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          {...control("form.control")}
          Fullname="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactFormPage;
