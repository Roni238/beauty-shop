<template>
    <header class="header">
        <NuxtLink to="/" class="header__logo">
            <IconsLogo/>
        </NuxtLink>

        <nav class="header__nav">
            <NuxtLink class="header__nav-link" to="/">Blog</NuxtLink>
            <NuxtLink class="header__nav-link" to="/">Products</NuxtLink>
            <NuxtLink class="header__nav-link" to="/">About</NuxtLink>
            <NuxtLink class="header__nav-link" to="/">Contact</NuxtLink>
        </nav>
        
        <button class="header__cta-btn">Shop Now</button>
    </header>
</template>

<style lang="scss" scoped>
    .header{
        background: $white-color;
        position: sticky;
        top: 0;
        z-index: 100;
        font-size: 20px;
        width: 100%;
        padding-inline: 40px;
        height: 121px;
        display: flex;
        align-items: center;

        @media(max-width: 1216px){
            padding-inline: 20px;
        }

        &__logo{
            margin-right: auto;
        }

        &__nav{
            display: flex;
            gap: 48px;
            
            @media(max-width: 1024px) {
                display: none;
            }
        }

        &__nav-link{
            position: relative;
            transition: color 0.3s ease;

            &::after {
                content: '';
                position: absolute;
                bottom: -8px;
                left: 0;
                width: 0;
                height: 2px;
                background-color: $pink-color;
                transition: width 0.3s ease;
            }

            &:hover {
                color: $pink-color;

                &::after {
                    width: 100%;
                }
            }
        }




        &__cta-btn{
            background-color: $black-color;
            color: $white-color;
            border-radius: 999px;
            border: none;
            margin-left: 48px;
            font-size: 20px;
            font-weight: 500;
            transition: all 0.3s ease;

            &:hover {
                background-color: $pink-color;
                box-shadow: 0 8px 20px rgba(226, 190, 255, 0.4);
            }
        }
    }
</style>