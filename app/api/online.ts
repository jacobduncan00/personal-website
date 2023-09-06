import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch(
        `https://api.lanyard.rest/v1/users/230938722017869824`
    ).then((res) => res.json());

    res.status(200).json(response);
};

export default handler;