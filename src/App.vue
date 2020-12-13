<template>
  <div>
    <img
      style="width: 50vw"
      :style="{
        backgroundColor: require('@/assets/Macaca_nigra_self-portrait_large.jpg?placeholder'),
      }"
      src="@/assets/Macaca_nigra_self-portrait_large.jpg"
      :srcset="
        require('@/assets/Macaca_nigra_self-portrait_large.jpg?srcset&quality=90')
      "
    />
    <img
      style="width: 50vw"
      src="@/assets/Simple_Periodic_Table_Chart-en.png"
      :srcset="require('@/assets/Simple_Periodic_Table_Chart-en.png?srcset')"
    />
    <!-- for modern browsers: -->
    <picture>
      <source
        type="image/webp"
        :srcset="
          require('@/assets/Macaca_nigra_self-portrait_large.jpg?srcset&format=webp&quality=90')
        "
      />
      <source
        type="image/jpeg"
        :srcset="
          require('@/assets/Macaca_nigra_self-portrait_large.jpg?srcset&quality=90')
        "
      />
      <img
        style="width: 50vw"
        :style="{
          backgroundColor: require('@/assets/Macaca_nigra_self-portrait_large.jpg?placeholder'),
        }"
        src="@/assets/Macaca_nigra_self-portrait_large.jpg"
      />
    </picture>
    <picture>
      <source
        type="image/webp"
        :srcset="
          require('@/assets/Simple_Periodic_Table_Chart-en.png?srcset&format=webp&quality=90')
        "
      />
      <source
        type="image/png"
        :srcset="require('@/assets/Simple_Periodic_Table_Chart-en.png?srcset')"
      />
      <img
        style="width: 50vw"
        src="@/assets/Simple_Periodic_Table_Chart-en.png"
      />
    </picture>
  </div>
</template>
