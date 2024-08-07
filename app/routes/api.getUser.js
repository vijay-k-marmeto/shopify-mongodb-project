import prisma from "../db.server"
import { json } from "@remix-run/node"

export const loader = async ({ request }) => {
    const user = await prisma.session.findUnique({
        where: {
            session_id: "66b3a62c4c7026767c951b32",
            shop: "vijay-dev-store.myshopify.com"
        }
    })
    return json(user)
}

// add data to UserData table
export async function action({ request }) {
    const data = {
        customerId: 536123456789,
        products: [
          {
            productId: 47587457846136,
            variantId: 46134613464666,
          },
          {
            productId: 28750928705928,
            variantId: 48608174069898,
          },
        ],
    }
  
    const user = await prisma.users.create({
    data: {
        customerId: 9871234567890,
        products: {
            create: [
            {
                productId: 12458275070584,
                variantId: 12399485982459,
                createdAt: new Date('2014-08-05T00:00:00.000Z')
            }
            ],
        },
        },
    });
  
    return json(user);
}