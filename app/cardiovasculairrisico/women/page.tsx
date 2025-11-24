"use client";

import React from "react";
import womanData from "@/public/woman-data.json";
import {GenderTable} from "@/app/cardiovasculairrisico/components/GenderTable";

export default function WomenPage() {
    return (
        <GenderTable gender={"vrouwen"} data={womanData} />
    );
}
