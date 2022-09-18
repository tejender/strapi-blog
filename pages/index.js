import Head from "next/head";
import Image from "next/image";
import axios from 'axios'
import Post from "../components/Post";
import NavBar from "../components/NavBar";

export default function Home({posts}) {
 
  return (

  <>
  <NavBar active="home"/>
  <div className="pt-20 flex gap-5">

  <section className=" w-[100%] lg:w-[65%]  justify-between">
   <Post posts={posts}/>
    </section>  
    <section className="right hidden lg:block bg-red-800  w-[35%]">
          right side
    </section>
  </div>

  </>
  )
}

export async function getServerSideProps(){
  const postsRes = await axios.get("http://localhost:1337/api/posts");

  return{
    props:{
      posts:postsRes.data
    }
  }
}