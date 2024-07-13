import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getSearchedMeal } from "@/lib/meals";
import { Suspense } from "react";

function Meals(params) {
  const { meals } = params;
  return <MealsGrid meals={meals} />;
}

export default async function searchedPage({ params }) {
  const meals = await getSearchedMeal(params.searched);
  //console.log(meals);
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals , created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself!</p>
        <p>
          <Link href="/meals/share" className={classes.cta}>
            Share Your Favourite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals meals={meals} />
        </Suspense>
      </main>
    </>
  );
}
