"use client";
import React from "react";
import { Form } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { form } from "@/validation/test";

const ContactFormPage = () => {
  return (
    <div>
      <Form>
        <form onSubmit={form.handleSubmit(submit)} className="">
          <FormField name={"name"} control={form.control}>
            <FormControl>
              <FormItem>
                <Input placeholder="Name" {...field} />
                <FormMessage />
              </FormItem>
            </FormControl>
          </FormField>
          <FormField name={"name"} control={form.control}>
            <FormControl>
              <FormItem>
                <Input placeholder="Email" {...field} />
                <FormMessage />
              </FormItem>
            </FormControl>
          </FormField>
          <Button type={"submit"}> Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactFormPage;
