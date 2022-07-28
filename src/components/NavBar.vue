<template>
  <nav>
    <div class="nav-center">
      <div class="nav-header">
        <img src="../assets/logo.png" class="logo" alt="logo" />
        <h1 class="links" >Blog</h1>
        <button class="nav-toggle" @click="toggleNavbar">
          <span class="material-symbols-rounded">{{
            isVisible ? "close" : "menu"
          }}</span>
        </button>
      </div>
      <div :class="[isVisible ? 'fixed-height' : '']" class="links-container">
        <ul class="links">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style>
.fixed-height {
  height: 100px !important;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
nav {
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 5%);
}
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
.nav-toggle {
  font-size: 1.5rem;
  color: hsl(205, 78%, 60%);
  background: transparent;
  border-color: transparent;
  transition: all 0.3s linear;
  cursor: pointer;
}
.nav-toggle:hover {
  color: hsl(205, 86%, 17%);
  transition: all 0.3s linear;
}
.logo {
  height: 40px;
}
.links a {
  color: hsl(209, 34%, 30%);
  font-size: 20px;
  text-transform: capitalize;
  display: block;
  padding: 0.5rem 1rem;
  transition: all 0.3s linear;
}
.links a:hover {
  background: hsl(220, 6%, 90%);
  color: #050505;
  padding-left: 1.5rem;
}

.links-container {
  height: 0;
  /* overflow: hidden; */
  transition: all 0.3s linear;
}
.show-container {
  height: 10rem;
}
@media screen and (min-width: 800px) {
  .nav-center {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-header {
    padding: 0;
  }
  .nav-toggle {
    display: none;
  }
  .links-container {
    height: auto !important;
  }
  .links {
    display: flex;
  }
  .links a {
    padding: 0;
    margin: 0 0.5rem;
  }
  .links a:hover {
    padding: 0;
    background: transparent;
  }
  
}
</style>
