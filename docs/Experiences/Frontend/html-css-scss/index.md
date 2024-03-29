---
title: html & css & scss
---
## CSS
### dark mode
برای اعمال `dark mode` می توانیم از چند روش استفاده کنیم:

در این روش می توان از قابلیت `prefers-color-scheme` استفاده کنیم ک مرورگر های **2019** ب بعد آن را ساپورت می کنند.
```css
body {
    display: grid;
    place-content: center; /*و مرورگر های 2017 ب بعد قابل اجرا است، می توان المان ها را ب وسط صفحه ببریم grid و flex توسط این قابلیت ک فقط در*/
    height: 100vh;
    color: darkgray; /* برای حالت لایت اعمال می شود و می توان پیش فرض قرار ندهیم */
    background-color: lightgray; /* برای حالت لایت اعمال می شود و می توان پیش فرض قرار ندهیم */
}
@media (prefers-color-scheme: dark){
    body {
        color: #fff;
        background-color: #000;
    }
}
```
🎉 در این روش هر گاه ک حالت دستگاه ما تغییر کند، خود ب خود صفحه از حالت دارک ب لایت تبدیل می شود، یعنی بر اساس تنظیمات دستگاهمان است.

🎉 همچنین برای شبیه سازی حالت دارک یا لایت دستگاه در مرورگر، می توان در `F12` و با زدن `CTRL + SHIFT + P`، این کلمه را سرچ کنیم `Rendering` و از قسمت `Emulate CSS media feature prefers-color-scheme` استفاده کرد.

1. رو حالت اول می توانیم دقیقا مانند مثال بالا، تک تک تگ ها و کلاس ها را در حالت دارک تغییر بدهیم ک حجم کد هایمان را زیاد میکند.
2. در روش دوم می توان از `variable`ها استفاده کنیم:
```css
:root {
    --primary: #000;
    --secondary: #fff;
    --titleColor: lime;
}
body {
    color: var("--primary");
    background-color: var("--secondary");
}
.title {
    color: var("--titleColor");
}
@media (prefers-color-scheme: dark){
    :root {
        --primary: #fff;
        --secondary: #000;
        --titleColor: orangered;
    }
}
```
3. در این روش هم می توان از کلاس ها استفاده کنیم و آن ها را تغییر دهیم:
```css
:root {
    --primary-light: #000;
    --secondary-light: #fff;
    --primary-dark: #fff;
    --secondary-dark: #000;
}
.bg-secondary {  /*light*/
    background-color: var("--secondary-light");
}
.color-primary {  /*light*/
    color: var("--primary-light");
}
@media (prefers-color-scheme: dark){
    .bg-secondary {
        background-color: var("--secondary-dark");
    }
    .color-primary {
        color: var("--primary-dark");
    }
}
```
حال از این کلاس ها در `html` استفاده می کنیم.

### BEM
ساختار برای نام گذاری کلاس ها می باشد ک مخفف `Block Element Modifier` می باشد و به صورت زیر است :

![BEM](/img/bem-naming-structure.svg) ![BEM](/img/bem-naming-structure-2.png) ![BEM](/img/bem-naming-structure-3.png)

### Tips
1. در واقع `()is:` و `()where:` شبیه ب هم هستند، با این فرق ک `()where:` سلکتور ضعیف تری نسبت ب `()is:` می باشد.

## SCSS
### Install
برای نصب `sass` باید از کد زیر استفاده کرد:
```shell
yarn add sass -D
```
🎉 ب صورت پیش فرض `react` این پکیج را ندارد و برای استفاده از `scss` باید این پکیج را نصب کنیم.

### dark mode
در `scss` برای دارک مود باید ب صورت زیر عمل کنیم: (متغییر ها در `scss` مانند متغییر های خود `css`)
```scss
$primary-light: #000;
$secondary-light: #fff;
$primary-dark: #000;
$secondary-dark: #fff;
:root {
    --primary: #{$primary-light};
    --secondary: #{$secondary-light};
}
body {
    background-color: var(--secondary);
    color: var(--primary);
}
@media (prefers-color-scheme: dark) {
    :root {
        --primary: #{$secondary-dark};
        --secondary: #{$primary-dark};
    }
}
```


### Tips
1. هرگاه بخواهیم یک کلاس ترکیبی را ک صورت توو در توو نوشته شده است را در یکجای دیگر `extend` کنیم، باید به صورت زیر عمل کنیم:
```scss
%message-info, .message.info {
  border: 1px solid black;
  font-size: 1.5rem;
}

.heads-up {
  // Instead of `.message.info`.
  @extend %message-info;
}
```
