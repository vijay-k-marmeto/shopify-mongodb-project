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
        customerId: data.customerId,
        products: {
          create: data.products.map((product) => ({
            productId: product.productId,
            variantId: product.variantId,
            createdAt: new Date(),
          })),
        },
      }
    });
  
    return json(user);
}