<template>
  <div>
    <nav-bar></nav-bar>
    <blog-container>
      <template v-slot:main>
          <base-card v-for="data in blogs" :key="data.id" :blog="data"></base-card>
      </template>
      <template v-slot:sidebar>
          <base-search></base-search>
          <base-category></base-category>
      </template>
    </blog-container>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import BlogContainer from '../components/BlogContainer.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseSearch from '../components/BaseSearch.vue'
import BaseCategory from '../components/BaseCategory.vue'
import {getAllBlog} from '../api/blog'

export default {
  name: 'Home',
  components:{
    NavBar,
    BlogContainer,
    BaseCard,
    BaseSearch,
    BaseCategory
  },
  created(){
    this.fetchBlogs()
   },
  data() {
    return {
      allBlogs:[],
      categoryBlogs:[],
      searchBlogs:[],
      category:'',
      search:''
    }
  },
  methods:{
    fetchBlogs(){
      getAllBlog()
    .then((res)=>{
      this.allBlogs = res.data
      const category = this.$route.query.category
      const search = this.$route.query.search
      if(category){
        this.allBlogs = res.data.filter(each=>each.category === category)
      }
      if(search){
        this.allBlogs = res.data.filter(each=> each.author.includes(search) || each.title.includes(search))
      }
    })
    .catch((err)=>{
      console.log("err",err)
    })
    }
  },
  computed:{
     blogs(){
       
      if(this.category){
        return this.allBlogs.filter(each=>each.category === this.category)
      }
      if(this.search){
        return this.allBlogs.filter(each=> each.author.includes(this.search) || each.title.includes(this.search))
      }
      return this.allBlogs 
      }
  },
  watch:{
    $route:{
        handler:function(to){
        this.category = to.query.category
        this.search = to.query.search
        // console.log("chnged")
        // if(qCategory){
        //   console.log("category changed")
        //   this.categoryBlogs = this.allBlogs.filter(each=>each.category === qCategory)
        //   console.log(this.categoryBlogs)
        // }
        // if(qSearch){
        //   console.log("search changed")
        //   this.searchBlogs = this.allBlogs.filter(each=> each.author.includes(qSearch) || each.title.includes(qSearch))
        //   console.log(this.categoryBlogs)
        // }
        },
        deep:true

    } 

  }
}
</script>
