import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { connect_to_db } from "../../../utils/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (session) {
    res.send({
      content: "Welcome to the reader",
    });
  } else {
    res.send({
      content: "You need to be signed in",
    });
  }

//   try {
//     const { db } = await connect_to_db();
//     const leads = await db.collection("leads").find().toArray();
//     console.log(leads);
//     res.json({ leads });
//   } catch (error) {
//     res.status(500);
//     res.json({ error: "unable to fetch leads" });
//   }
}
