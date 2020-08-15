---
templateKey: blog-post
title: UseEffect, UsePrevious and handling render issues inside a complex React Native Swiper Component.
date: 2020-08-10T15:45:10.000Z
description: How I tackled the rendering issues in a complex React Native component.
thumbnail: '/static/img/6632FD95-4EFC-4717-AE4A-E667D798C28D-4472B90C-3A34-4524-9985-C6BA671B3753.JPG'
tags:
  - learning programming
  - react native
  - javascript
---

## **Intro**

So today I finally wanted to talk to you about some of the issues I had and how I finally undestood how to use **_useEffect_** hook to make my feature work. I've been implementing a Swiper inside a already quite complex component. I've been using the same react-native-swiper library I was posting about some time ago.

---

One of the issues I had was having a correctly rendered component with all of its features which includes: rendering photo, likes, comments, download & share options & being reactive to filtering and sorting, etc. This component is pretty heavy, because it contains quite a lot of features.

```jsx
function usePrevious(value: string) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}
```

Before I get into explaining the component specific stuff I'll try to explain one concept which helped me solve one of the issues I encountered there.

## **How to get previous props/state with React Hooks**.

Whenever we want to compare value of one of the current props/state to the previous values we can use **_useRef_** hook and the best way to use it would be extracting it to the separate custom hook function.

Then when we have this custom hook - we just call it inside our component and assign it to a variable and then compare that variable value to a current value inside a **_useEffect_** hook. This is a great way to prevent unnecessary rerendering inside our apps & also making sure we're using the updated value.

```jsx
const prevMediumId = usePrevious(mediumId)

useEffect(() => {
  if (mediumId !== prevMediumId) {
    loadMedium(eventId, mediumId)
  }
}, [prevMediumId, eventId, mediumId])
```

Why this works? The ref object will always return the same value held in ref.current, except when explicitly updated ( for example like that: ref.current = **_newValue),_** which is by the way sometimes also usable concept I might explain in the future(or not).

**_useEffect_** hook is only called after the component is fully rendered with the previous value. When the render is finished then the ref object is updated in **_useEffect_** and then we can call an action based on that change.

So when I finally figured out how I could make use of this **\*\***custom hook concept, I could go and fix the complex rendering issues with the component I mentioned at the beggining.

## **Warning: Cannot update a component from inside the function body of a different component\***

So the 1st feature I was having trouble with was correctly rendering likes & comments. The issue was because it required a seperate call to a backend to get the info about the likes & comments for the specific photo.

So when working with react-native-swiper I've been using a prop called **_onIndexChanged_** which allows us to call a function when we swipe to another slide. I've been calling the API for the info about likes & comments while the component was rendering & I was causing the race condition that caused errors & component didn't load correctly with a lots of errors.

The way I solved it was by using a custom **_usePrevious_** hook with combination with **_useEffect._**
This post is getting quite heavy so I think it's maybe a good way to create it as a new blog post.

By using this custom **_usePrevious_** hook inside the **_useEffect_** - I was able to check if the photo ID has changed after firing the **_onIndexChanged_** function and this way to make that 2nd call to load the likes & comments correctly. I got rid of the warning and the component loads correctly without wasting rerenders.

## **Instagram-like Zoom**

The 2nd problem is significantly more complicated one. Did I mention that the complex component I'm working on also have a zoom effect which allows you to zoom the picture as on Instagram ? 😅If you're watching William Candilion videos on YouTube regularly ( which I strongly recommend! )- he recreated the feature in one of his videos. You can see that this is not that simple of a task to do.
Inside the Celebrate app i'm working on we've used a PanResponder from the core React Native library instead of the react-native-gesture-handler, which is working quite good.

I've been reworking this zooming feature nd added a new smoother animations and transform transitions some time ago. The main issue inside the (already complex) component I'm working on here is that on top of that zooming feature I added a swiper. This adds more complexity because the Zoomer Component itself uses a separate React Context state which allows the photo to be scaled out of it's container & above the Status Bar.

Pre-adding the swiper component the Zoomer component worked like this - I click on a particular photo and it loads in a new (PhotoDetails) screen. Inside that Photo Details screen I pass all the photo data which was loaded from the API-call (mentioned in the 1st part) to the Zoomer - which then sets that photo to a local React Context state - this way the Context Consumer photo rendered above the Navigation, is able to load the photo details from the Context state and scale above the Status Bar.

> _I tried to explain it the best and simplest way I could, if you have any question regarding this - [here's](https://medium.com/@audytanudjaja/react-native-ui-challenge-building-instagram-zoom-draggable-photo-9127413b1d29) a great(quite old, but still relevant) article on how to do that the way we did._

The main issue I had here with this compnent after adding a Swiper was that I was loading 3 items at once which called unnecessary API calls & then made a mess inside the React Context state which thought the currently active photo is the next or previous slide which made the screen frozen and app had to be restarted in order to work again.

Long-story short - I had to take use of a **_loadMinimalSize_** & **_loadMinimal_** props provided by react-native-swiper component and set the **_loadMinimalSize_** to **_0._** This way I'm only loading 1 photo at once and a second API call is called just in time to have the loader show up for half a second & then new screen shows up.

This is the way I made sure that every part of the component renders correctly and there's no memory leaks inside the component. While working on that feature and while writing this post I think I finally understood how the **_useEffect_** & **_useRef_** works correctly and I now feel like I'm already a better developer now.

I hope I could help you with my explanations about my errors I encountered for the past 2 weeks. There is still a ton of stuff to be written about this quite small change and all of the parts of the component. I think I'll probably create much more content about it while trying to explain that. Be sure to follow me on Instagram to get the freshest information about React Native in a written form 🙂

P.S. Thank you for reading my blog. If you'd like to read more of my content - I and just started live streaming regularly post on [Instagram](https://www.instagram.com/selfmadedeveloper/), join me there to be up to date with all my content.
