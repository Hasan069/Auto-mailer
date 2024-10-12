"use client";
import React from "react";
import { Form } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const ContactFormPage = () => {
  return (
    <div>
      <Form>
        <form>
          <FormField name={"name"} control={form.control}>
            <FormControl>
              <FormItem>
                <Input placeholder="Name" />
                <FormMessage />
              </FormItem>
            </FormControl>
          </FormField>
          form
        </form>
      </Form>
    </div>
  );
};

export default ContactFormPage;
