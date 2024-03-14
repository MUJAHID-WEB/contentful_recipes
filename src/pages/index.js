import Image from "next/image";
import { Inter } from "next/font/google";
import { createClient } from "contentful";
import RecipeCard from '../components/RecipeCard'

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps(){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({content_type: 'recipe'})

  return{
    props:{
      recipes: res.items
    },
    revalidate: 1
  }
}

export default function Home({recipes}) {
  console.log(recipes)
  return (
    <div className="recipe-list">
    {/* {
      recipes.map((item)=>(
        <div key={item.sys.id}>
        {item.fields.title}

        </div>
      ))
    } */}
      {recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}
