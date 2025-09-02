declare type Plan = {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: number;
  duration_unit: string;
  is_best_deal: boolean;
  paddle_price_id: string;
  created_at: string;
};

declare type PurchasedPlan = {
  id: number;
  plan: Plan;
  plan_id: number;
  amount_paid: string;
  start_date: string;
  end_date: string;
  status: "active" | "cancelled" | "expired";
};
