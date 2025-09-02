"use client";

import React, { FC, useState } from "react";
import { SEND_FEEDBACK_ROUTE } from "@/lib/constants";
import { emailSchema, messageSchema, subjectSchema } from "@/lib/zod-schemas";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addToast,
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@heroui/react";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import axios, { AxiosError } from "axios";

const FeedBackFormCard: FC = () => {
  const feedbackSchema = z.object({
    subject: subjectSchema,
    email: emailSchema,
    message: messageSchema,
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    setError,
    reset,
  } = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: { subject: "", email: "", message: "" },
  });

  const submit: SubmitHandler<z.infer<typeof feedbackSchema>> = async (
    values
  ) => {
    try {
      const res = await axios
        .post<{ status: boolean; message: string }>(
          SEND_FEEDBACK_ROUTE,
          values,
          { headers: { Accept: "application/json" } }
        )
        .then((res) => res.data);

      if (res.status) {
        setSuccessMessage(res.message);
        addToast({ color: "success", description: res.message });
        reset();
      } else {
        setError("root", { type: "manual", message: res.message });
        addToast({ color: "danger", description: res.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : error instanceof Error
          ? error.message
          : "Failed to send feedback";
      setError("root", { type: "manual", message: errorMessage });
      addToast({ color: "danger", description: errorMessage });
    }
  };

  return (
    <Card
      as="form"
      onSubmit={handleSubmit(submit)}
      className="p-6 dark:bg-gray-900"
    >
      <CardBody className="gap-y-5">
        <Input
          isRequired
          label="Subject"
          placeholder="Enter your subject"
          type="text"
          errorMessage={errors.subject?.message}
          {...register("subject")}
        />

        <Input
          isRequired
          label="Email"
          placeholder="Enter your email address"
          type="email"
          errorMessage={errors.email?.message}
          {...register("email")}
        />

        <Textarea
          isRequired
          label="Question"
          placeholder="Type here your question"
          errorMessage={errors.message?.message}
          {...register("message")}
        />

        {errors.root && (
          <Alert
            color="danger"
            title={errors.root.message}
            className="text-start"
          />
        )}

        {successMessage && (
          <Alert
            color="success"
            title={successMessage}
            className="text-start"
          />
        )}
      </CardBody>
      <CardFooter>
        <Button
          type="submit"
          isLoading={isSubmitting}
          size="lg"
          color="primary"
          fullWidth
        >
          Ask Us A Question
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeedBackFormCard;
