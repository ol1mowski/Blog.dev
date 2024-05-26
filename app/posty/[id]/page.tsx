import React from "react";

function page({ params }: { params: { id: string } }) {
  return <h1>{params.id} </h1>;
}

export default page;
