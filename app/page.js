import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/images-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Find your next favorite dish today</h1>
            <p>From home kitchens to gourmet creations.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Recipe Hub is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Recipe Hub is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Recipe Hub?</h2>
          <p>
            At RecipeHub, culinary creativity meets community. Our platform is
            designed to foster a love of cooking and sharing. Discover new
            recipes, connect with other food enthusiasts, and be inspired by the
            endless possibilities that come from the kitchen. Join us and start
            your culinary adventure today.
          </p>
        </section>
      </main>
    </>
  );
}
