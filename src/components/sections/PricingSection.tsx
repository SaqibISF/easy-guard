import React, { FC } from "react";
import Section, { SectionProps } from "../Section";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Alert } from "@heroui/alert";
import { Chip } from "@heroui/chip";
import { CheckIcon } from "@heroicons/react/24/solid";
import { fetchPlans } from "@/lib/fetchPlans";
import { cn } from "@/lib/utils";

const PricingSection: FC<SectionProps> = async ({ ...props }) => {
  const { status, message, plans } = await fetchPlans();

  return (
    <Section
      heading="Choose Your Plan"
      description="Flexible pricing options for every need"
      {...props}
    >
      {(!status || !plans.length) && (
        <Alert color="danger" className="max-w-lg text-start">
          {message ? message : "No plans founded"}
        </Alert>
      )}

      {status && plans.length && (
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "p-4 overflow-visible",
                plan.is_best_deal
                  ? "outline-2 outline-offset-2 outline-primary"
                  : "outline outline-offset-1 outline-neutral-200 dark:outline-gray-800 dark:bg-gray-950/50 dark:shadow-none"
              )}
              style={{
                background: plan.is_best_deal
                  ? "linear-gradient(90deg, rgba(255, 59, 48, 0.10) 0%, rgba(26, 189, 204, 0.10) 100%)"
                  : undefined,
              }}
            >
              {plan.is_best_deal && (
                <Chip
                  color="primary"
                  className="absolute left-1/2 -translate-x-1/2 -top-4"
                >
                  Most Popular
                </Chip>
              )}
              <CardHeader className="flex-col items-start gap-y-3">
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-default-500 text-base">
                  /
                  {plan.duration > 1
                    ? `${plan.duration} ${plan.duration_unit}`
                    : plan.duration_unit}
                </span>
              </CardHeader>
              <CardBody as="ul" className="gap-y-3.5">
                {plan.description.split(",").map((feature, index) => (
                  <li key={index} className="flex items-center gap-x-1">
                    <CheckIcon
                      stroke="currentColor"
                      strokeWidth={2}
                      className="size-4 text-primary"
                    />
                    <p className="text-default-500 text-base">
                      {feature.trim()}
                    </p>
                  </li>
                ))}
              </CardBody>
              <CardFooter>
                <Button
                  color={plan.is_best_deal ? "primary" : "default"}
                  fullWidth
                  radius="full"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
};

export default PricingSection;
