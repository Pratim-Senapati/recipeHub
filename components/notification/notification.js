import classes from "./notification.module.css";

export default function Notification(params) {
  const { stat } = params;
  let bool;
  if (stat === "success") {
    bool = true;
  }
  if (stat === "error") {
    bool = false;
  }
  return (
    <div className={bool ? classes.success : classes.error}>
      <div className={classes.error__icon}>
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          class="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
      <div className={classes.error__title}>
        {bool ? "Mail has been sent successful" : "Something went wrong"}
      </div>
      <div className={classes.error__close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          viewBox="0 0 20 20"
          height="20"
        >
          <path
            fill="#393a37"
            d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
