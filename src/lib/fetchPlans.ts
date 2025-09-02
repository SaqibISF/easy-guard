import { GET_PLANS_ROUTE } from "./constants";

export const fetchPlans = async (): Promise<{
  status: boolean;
  message: string;
  plans: Plan[];
}> => {
  try {
    const {
      status,
      message,
      plans,
    }: { status: boolean; message?: string; plans: Plan[] } = await fetch(
      GET_PLANS_ROUTE,
      { method: "GET" }
    ).then((res) => res.json());
    return {
      status,
      message: message ? message : "Plans fetched successfully",
      plans,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch plans";
    return { status: false, message, plans: [] };
  }
};
