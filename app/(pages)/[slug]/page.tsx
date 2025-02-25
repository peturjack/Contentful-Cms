import React from "react";

import { FieldsType } from "contentful";
import client from "../../lib/contentful";
import Card from "../../components/treatmentPlans/Card";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const entries = await client.getEntries({
    content_type: "testimonialSpaCards",
    "fields.slug": slug,
  });
  const data: FieldsType = entries.items[0].fields;
  const reference: FieldsType = data.referenceTreatment;
  const imageUrl = `https:${data.spaImage.fields.file.url}`;

  return <Card data={data} image={imageUrl} reference={reference} />;
}
