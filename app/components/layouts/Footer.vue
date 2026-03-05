<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="footer__brand">
                <IconsLogo class="footer__logo"/>
                <p class="footer__tagline">French Haute Cosmétique since 1920</p>
            </div>
            
            <div class="footer__nav-grid">
                <div class="footer__nav-column">
                    <h4>Explore</h4>
                    <ul>
                        <li><NuxtLink to="/">Blog</NuxtLink></li>
                        <li><NuxtLink to="/">Products</NuxtLink></li>
                        <li><NuxtLink to="/">Skincare Guide</NuxtLink></li>
                        <li><NuxtLink to="/">Ingredients</NuxtLink></li>
                    </ul>
                </div>
                
                <div class="footer__nav-column">
                    <h4>About</h4>
                    <ul>
                        <li><NuxtLink to="/">Our Story</NuxtLink></li>
                        <li><NuxtLink to="/">Heritage</NuxtLink></li>
                        <li><NuxtLink to="/">Sustainability</NuxtLink></li>
                        <li><NuxtLink to="/">Careers</NuxtLink></li>
                    </ul>
                </div>
                
                <div class="footer__nav-column">
                    <h4>Support</h4>
                    <ul>
                        <li><NuxtLink to="/">Contact Us</NuxtLink></li>
                        <li><NuxtLink to="/">FAQ</NuxtLink></li>
                        <li><NuxtLink to="/">Shipping</NuxtLink></li>
                        <li><NuxtLink to="/">Returns</NuxtLink></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer__contact">
            <div class="footer__contact-info">
                <h4>Contact</h4>
                <p><a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
                <p><a href="mailto:contact@payot.com">contact@payot.com</a></p>
                <div class="footer__social">
                    <a href="#" aria-label="Instagram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Facebook">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Pinterest">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"/>
                            <path d="M12 12v6"/>
                        </svg>
                    </a>
                </div>
            </div>
            
            <div class="footer__newsletter">
                <h4>Stay Connected</h4>
                <p>Subscribe for exclusive offers and beauty tips</p>
                <form class="footer__subscribe-form">
                    <input type="email" placeholder="Your email" />
                    <button type="submit">Join</button>
                </form>
            </div>
        </div>

        <div class="footer__bottom bottom-panel">
            <div class="bottom-panel__legal">
                <p>&copy; 2024 Payot. All rights reserved.</p>
                <div class="bottom-panel__links">
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms of Service</a>
                    <a href="/">Cookie Policy</a>
                </div>
            </div>
            
            <div class="bottom-panel__made-with">
                <p>Made with ❤️ in Paris</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        background-color: #FAF8FB;
        padding-top: 100px;

        &__top {
            @include container;
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 80px;
            padding-bottom: 80px;
            border-bottom: 1px solid #E8E8E8;

            @media(max-width: 1024px) {
                grid-template-columns: 1fr;
                gap: 60px;
            }
        }

        &__brand {
            padding-right: 40px;
        }

        &__logo {
            width: 120px;
            margin-bottom: 24px;
        }

        &__tagline {
            font-size: 18px;
            color: $gray-2-color;
            line-height: 1.5;
        }

        &__nav-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;

            @media(max-width: 768px) {
                grid-template-columns: 1fr;
            }
        }

        &__nav-column {
            h4 {
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 24px;
                color: $black-color;
            }

            ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            li {
                margin-bottom: 16px;

                a {
                    color: $gray-3-color;
                    font-size: 16px;
                    transition: color 0.3s ease;

                    &:hover {
                        color: $pink-color;
                    }
                }
            }
        }

        &__contact {
            @include container;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            padding: 80px 0;
            border-bottom: 1px solid #E8E8E8;

            @media(max-width: 1024px) {
                grid-template-columns: 1fr;
                gap: 60px;
            }
        }

        &__contact-info {
            h4 {
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 24px;
            }

            p {
                margin-bottom: 16px;
                font-size: 18px;
                color: $gray-3-color;

                a {
                    color: $black-color;
                    transition: color 0.3s ease;

                    &:hover {
                        color: $pink-color;
                    }
                }
            }
        }

        &__social {
            display: flex;
            gap: 16px;
            margin-top: 32px;

            a {
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #E8E8E8;
                border-radius: 50%;
                transition: all 0.3s ease;

                svg {
                    width: 20px;
                    height: 20px;
                }

                &:hover {
                    border-color: $pink-color;
                    background-color: $pink-color;
                    
                    svg {
                        stroke: $white-color;
                    }
                }
            }
        }

        &__newsletter {
            h4 {
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 16px;
            }

            p {
                font-size: 16px;
                color: $gray-3-color;
                margin-bottom: 24px;
            }
        }

        &__subscribe-form {
            display: flex;
            gap: 12px;

            input {
                flex: 1;
                padding: 16px 24px;
                border: 1px solid #E8E8E8;
                border-radius: 999px;
                font-family: $main-font;
                font-size: 16px;

                &:focus {
                    outline: none;
                    border-color: $pink-color;
                }
            }

            button {
                padding: 16px 40px;
                background-color: $black-color;
                color: $white-color;
                border: none;
                border-radius: 999px;
                font-size: 16px;
                font-weight: 500;
                transition: all 0.3s ease;

                &:hover {
                    background-color: $pink-color;
                }
            }
        }

        &__bottom {
            @include container;
            padding: 40px 0;
        }
    }

    .bottom-panel {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__legal {
            display: flex;
            align-items: center;
            gap: 40px;

            p {
                font-size: 14px;
                color: $gray-2-color;
            }
        }

        &__links {
            display: flex;
            gap: 32px;

            a {
                font-size: 14px;
                color: $gray-2-color;
                transition: color 0.3s ease;

                &:hover {
                    color: $pink-color;
                }
            }
        }

        &__made-with {
            p {
                font-size: 14px;
                color: $gray-2-color;
            }
        }
    }
</style>