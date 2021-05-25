<!--

## usage
### (1)
Specify a relative path. 
The Single File Component does not resolve the relative path to the figure, so the img tag is required.
```markdown
<vuepress-card href="../relative/path/to/directory/">
  <img src="../relative/path/to/directory/img.jpg">
</vuepress-card>
```

### (2)
Write the title and article description to `descriptionTitle` and` cardDescription` in the frontmatter.
```markdown:../relative/path/to/directory/index.md
---
title: 
description: 
cardTitle: 
cardDescription: 
meta:
 -
  og:image: 
 -
  og:title: 
 -
  og:description: 
---
```
  -->
<template>
  <article class="outer">
    <a class="inner" :href="path" target="_blank">
      <div class="photo-outer">
        <slot></slot>
      </div>
      <div class="text-outer">
        <div class="title">{{ title() }}</div>
        <div class="description">{{ description() }}</div>
      </div>
    </a>
  </article>
</template>
<script>
export default {
  props: {
    path: { required: true, type: String }
  },
  data() {
    return {
      page: undefined
    }
  },
  created() {
    this.page = findPage(this.$site.pages, this.$page.regularPath, this.path)
  },
  methods: {
    title() {
      return this.page.frontmatter.cardTitle
    },
    description() {
      return this.page.frontmatter.cardDescription
    }
  }
}
function findPage(pages, basePath, relativePath) {
  const absolutePath = absolute(basePath, relativePath)
  for (const page of pages) {
    if (page.regularPath === absolutePath) {
      return page
    }
  }
  throw Error('[vuepress-webcard.vue]: ' + relativePath + ' not found.')
}
function absolute(base, relative) {
  // http://bit.ly/33ghY6T
  const stack = base.split('/')
  const parts = relative.split('/')
  stack.pop()
  for (var i = 0; i < parts.length; i++) {
    if (parts[i] === '.') continue
    if (parts[i] === '..') stack.pop()
    else stack.push(parts[i])
  }
  return stack.join('/')
}
</script>
<style scoped>
.outer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  transition: all 1s;
  width: 100%
}
.inner {
  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1)
  border: solid 1px #F2F2F2;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  width: 95%;
  transition: all 0.5s;
}
a {
  text-decoration: none !important;
  color: black !important;
}
.photo-outer {
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
img {
  max-height: 120%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
}
.text-outer {
  padding: 1rem;
  background: #fff;
  position: relative;
  z-index: 1;
}
.title {
  text-align: center;
  font-weight: bold;
  line-height: 1;
  margin: 0;
  margin-bottom: 20px;
  font-size: 1.2rem;
}
.inner:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  img {
    transform: translate(-50%, -50%) scale(1.03) rotate(3deg);
    transition: all 0.5s;
  }
}
@media (min-width: 480px) {
  .inner {
    max-width: 700px;
    height: 200px;
    width: 80%;
    flex-direction: row;
  }
  .photo-outer {
    flex-basis: 40%;
    height: auto;
    overflow: hidden;
    position: relative;
    width: 300px;
  }
  .text-outer {
    display: flex;
    flex-basis: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text-outer:before {
    transform: skewX(-3deg);
    content: '';
    background: #fff;
    width: 30px;
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
}
</style>