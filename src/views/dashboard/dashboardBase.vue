<template>
  <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content p-8 flex flex-col items-center">
      <router-view />
      <!-- Page content here -->
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>

      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <li>
          <router-link :to="{ name: 'home' }" class="btn-ghost">
            <img width="180" height="48" src="/vueStore.svg" alt="Vue Store Logo" />
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'dashboardProducts' }">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path
                d="M21.025 11.05V19q0 .825-.587 1.413-.588.587-1.413.587h-14q-.825 0-1.412-.587-.588-.588-.588-1.413v-7.95q-.575-.525-.887-1.35-.313-.825-.013-1.8l1.05-3.4q.2-.65.713-1.075Q4.4 3 5.075 3h13.9q.675 0 1.175.412.5.413.725 1.088l1.05 3.4q.3.975-.012 1.775-.313.8-.888 1.375Zm-6.8-1.05q.675 0 1.025-.463.35-.462.275-1.037l-.55-3.5h-1.95v3.7q0 .525.35.913.35.387.85.387Zm-4.5 0q.575 0 .938-.387.362-.388.362-.913V5h-1.95l-.55 3.5q-.1.6.263 1.05.362.45.937.45Zm-4.45 0q.45 0 .787-.325.338-.325.413-.825L7.025 5h-1.95l-1 3.35q-.15.5.162 1.075Q4.55 10 5.275 10Zm13.5 0q.725 0 1.05-.575.325-.575.15-1.075L18.925 5h-1.9l.55 3.85q.075.5.413.825.337.325.787.325Zm-13.75 9h14v-7.05q-.125.05-.162.05h-.088q-.675 0-1.188-.225-.512-.225-1.012-.725-.45.45-1.025.7-.575.25-1.225.25-.675 0-1.263-.25-.587-.25-1.037-.7-.425.45-.987.7-.563.25-1.213.25-.725 0-1.313-.25-.587-.25-1.037-.7-.525.525-1.037.737Q5.925 12 5.275 12h-.112q-.063 0-.138-.05V19Zm14 0h-14 14Z"
              />
            </svg>
            產品</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'dashboardCoupons' }">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path
                d="m9.2 16 2.8-2.1 2.75 2.1-1.05-3.4 2.8-2.2h-3.4L12 7l-1.1 3.4H7.5l2.75 2.2ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18v-4q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v4q-.825 0-1.413.587Q20 11.175 20 12q0 .825.587 1.412Q21.175 14 22 14v4q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16v-2.55q-.925-.55-1.462-1.462Q18 13.075 18 12t.538-1.988Q19.075 9.1 20 8.55V6H4v2.55q.925.55 1.463 1.462Q6 10.925 6 12t-.537 1.988Q4.925 14.9 4 15.45Zm8-6Z"
              />
            </svg>
            優惠券</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'dashboardOrders' }">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path
                d="M8 17q.425 0 .713-.288Q9 16.425 9 16t-.287-.713Q8.425 15 8 15t-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17Zm0-4q.425 0 .713-.288Q9 12.425 9 12t-.287-.713Q8.425 11 8 11t-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm0-4q.425 0 .713-.288Q9 8.425 9 8t-.287-.713Q8.425 7 8 7t-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm3 8h6v-2h-6Zm0-4h6v-2h-6Zm0-4h6V7h-6ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"
              />
            </svg>
            訂單</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'dashboardArticles' }">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path
                d="M8 18h8v-2H8Zm0-4h8v-2H8Zm-2 8q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Zm7-13V4H6v16h12V9ZM6 4v5-5 16V4Z"
              />
            </svg>
            文章</router-link
          >
        </li>
        <li class="mt-auto">
          <button type="button" @click="handleLogout">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path
                d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h7v2Zm11-4-1.375-1.45 2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5Z"
              />
            </svg>
            後台登出
          </button>
        </li>
        <li>
          <router-link :to="{ name: 'home' }">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" />
            </svg>
            返回商城</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter();
const axiosWithAuth = inject('axiosWithAuth');
const $loading = inject('$loading');

function handleLogout() {
  const loader = $loading.show();
  axiosWithAuth({
    method: 'post',
    url: `${import.meta.env.VITE_APP_API}/logout`,
  })
    .then((res) => {
      if (res.data.success) {
        route.push({ name: 'login' });
      }
    })
    .finally(loader.hide());
}
</script>
