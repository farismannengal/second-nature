"use client";

import { InlinePrimaryTitle } from "@/components/molecules/titleSyles/Title";
import MealCategory from "@/components/organism/mealCard/MealCategory ";
import Image from "next/image";
import React from "react";

export default function MealsAndTreats() {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row">
        <div className="basis-[50%] relative">
          <div className="sticky top-6 mb-8 lg:mb-0">
            <InlinePrimaryTitle
              title="& Treats"
              highlight="Meals"
              paragraph="Options that fit every palate "
              textAlign="left"
              textColor="#00683D"
              order="dissenting"
              className="mb-(--space-54-126) sm:mx-auto lg:ml-0"
            />
            <div className="w-(--space-254-490) lg:-ml-14 sm:mx-auto lg:mr-0">
              <Image
                src="/images/vector-meals-and-treats.svg"
                alt="Meals & Treats"
                fill
                className="!static"
              />
            </div>
          </div>
        </div>
        <div className="basis-[50%]">
          <MealCategory />
        </div>
      </div>
    </section>
  );
}
