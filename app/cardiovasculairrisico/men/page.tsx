"use client";

import React from "react";
import manData from "@/public/man-data.json";
import {GenderTable} from "@/app/cardiovasculairrisico/components/GenderTable";

export default function MenPage() {
    return (
        <GenderTable gender={"mannen"} data={manData} />
    );
}
