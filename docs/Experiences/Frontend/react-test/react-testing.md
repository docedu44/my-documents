---
title: React Testing
---

## Testing
نصب `react testing library`(اگر آن را نداشتیم.)
```shell
npm install @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest
````
🎉 اگر به صورت پیش فرض این پکیج ها روی پروژه نصب بود، نیازی ب نصب `testing-library/dom@` نیست اما در غیر اینصورت باید نصب شود.

🎉 بهتر است بجای `fireEvent` از `user-event` استفاده شود، زیرا هم قابلیت های بیشتری دارد و هم می توان چندین رویداد را همزمان تست کرد.

🎉 در واقع `Unit test` یعنی تست نوشتن برای هر کامپوننت و بخش ب صورت کاملا مجزا

🎉 در واقع `Integration test` یعنی تست کردن روابط بین چند کامپوننت، مثلا در پروژه ای مثل `Todo List` با وارد کردن یک تسک در `input`، انتظار داریم ک آن مقدار ب یک کامپوننت دیگر اضافه و نمایش داده شود.

🎉 و در `End to End test ( e2e )` ما در واقع رفتار کاربر را شبیه سازی ( با نرم افزار ها یا پکیج ها، مثل `cypress` ) و در واقع کل سیستم را تست میکنیم.
```jsx
test("renders learn react link", () => { // توضیح برای مشخص کردن اینکه این تست چه کاری میکند
    render(<App/>); // کامپوننتی ک می خواهیم تست کنیم
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
})
```
🎉 می توان از `test` یا `it` استفاده کرد و فرقی باهم ندارند.

### getByRole
توسط این متد می توان المان مورد نظر را توسط `role` آن پیدا کنیم (هر المان در `html` یک نقش دارد)
[Roles](https://www.w3.org/TR/wai-aria-1.2/#role_definitions)
```jsx
const colorButton = screen.getByRole("button", {name: "Change to blue"});
const checkbox = screen.getByRole("checkbox", {name: "Disable button"}); // ها checkbox می باشد برای  label همان  name در واقع
```
[ByRole](https://testing-library.com/docs/queries/byrole)

🎉 همچنین می توان اگر نام نقش را نمی دانستیم، یک کلمه بی معنی بنویسیم و هنگام `fail` شدن تست، نقش اصلی آن المان را ببینیم.

🎉 توسط `name` می توان نام دکمه را مشخص کرد (همچنین می توان موارد دیگر را نیز چک کرد)

### getByText
توسط این متد می توان متنی ک می خواهیم را در صفحه بیاببیم:
```tsx
const scoopsSubtotal = screen.getByText("Scoops total: $", {exact: false});
```
[ByText](https://testing-library.com/docs/queries/bytext)

🎉 همچنین می توان مشخص کرد ک ما نمی خواهیم دقیقا همین متن باشد و فقط می خواهیم ک متنی را پیدا کند ک این رشته بخشی از آن باشد ک به صورت پیش فرض `exact: true` می باشد.

### queryByText()
همانطور ک در قسمت `Structure` گفته شده است، از `query` زمانی استفاده می شود ک بدانیم یک المان در صفحه نیست. و در این تست می توان از متنی ک در صفحه نیست استفاده کرد:
```jsx
    it('Popover responds to hover', () => {
        render(<SummaryForm/>);
        const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
        expect(nullPopover).not.toBeInTheDocument();
    });
```

### toBeEnabled & toBeDisabled
هر زمان بخواهیم `enabled` یا `disabled` یک المان را چک کنیم، می توان از این متد استفاده کرد:
```jsx
  expect(colorButton).toBeEnabled();
  expect(colorButton).toBeDisabled();
```
[toBeDisabled & toBeEnabled](https://github.com/testing-library/jest-dom#tobedisabled)

### toBeChecked
برای `checkbox` ها بیشتر استفاده می شود ک اگر بخواهیم `unchecked` را چک کنیم، می توان از `not` استفاده کرد:
```jsx
  expect(checkbox).not.toBeChecked();
```
[toBeChecked](https://github.com/testing-library/jest-dom#tobechecked)

### toEqual
زمانی ک بخواهیم یک آرایه یا آبجکت را باهم مقایسه کنیم، از `toEqual` استفاده میکنیم (مانند `toBe` برای رشته ها و اعداد)
```tsx
    const altsText: ReadonlyArray<string> = scoopImages.map((scoopImage: HTMLImageElement) => scoopImage.alt);
    expect(altsText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
```
🎉 می توان در تست ها نیز روی آرایه ها `map` زده و از مقادیر آن ها استفاده کرد.

### describe & toBe
توسط این تابع می توان تست هایمان را گروه بندی کنیم و برای آن ها یک توضیحات قرار دهیم:
```jsx
describe("Spaces before camel-case capital letters", () => {
    test("Works for no inner capital letters", () => {
        expect(replaceCamelWithSpaces("Red")).toBe("Red");
    });
    test("Works for one inner capital letter", () => {
        expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
    });
})
```
🎉 در واقع زمانی ک بخواهیم خروجی یا مقایسه 2 مقدار (رشته یا عدد) را انجام بدهیم، می توانیم از `toBe` استفاده کنیم.

### toHaveLength
زمانی ک بخواهیم `length` یک آرایه را (بیشتر برای موقعی است ک تعداد طول آرایه را میدانیم، مثلا موقع استفاده از `mock server`) تست کنیم:
```tsx
      const scoopImages: ReadonlyArray<HTMLImageElement> = screen.getAllByRole("img", {name: /scoop$/i}); // name is delegate for alt
    expect(scoopImages).toHaveLength(2);
```
🎉 در اینجا `getAllByRole` هم ماننده `getByRole` اما آرایه ای از المان ها را برمیگرداند.

### toHaveStyle
توسط این متد (`matcher`) می توان `style` داده شده ب المان را چک کرد:
[Jest DOM - matchers](https://github.com/testing-library/jest-dom#table-of-contents)
```jsx
  expect(colorButton).toHaveStyle({backgroundColor: "red"});
```
[toHaveStyle](https://github.com/testing-library/jest-dom#tohavestyle)

🎉 بهتر است برای هر بخش یک `assertion` بنویسیم، چون اگر همه تست ها را در یک `assertion` قرار دهیم، اگر جایی ب ارور بخورد، بقیه کد های آن بخش اجرا نمی شوند.

### toHaveTextContent
زمانی ک بخواهیم چک کنیم ک یک متنی شامل چیزی ک ما میخواهیم هست یا نه، می توان از این متد استفاده کرد:
```tsx
const scoopsSubtotal = screen.getByText("Scoops total: $", {exact: false});
expect(scoopsSubtotal).toHaveTextContent("0.00");
```
[toHaveTextContent](https://github.com/testing-library/jest-dom#tohavetextcontent)

### waitForElementToBeRemoved
هرگاه بخواهیم به صورت `async` یک المان حذف شده از `DOM` را تست کنیم، میتوان از تابع `waitforelementtoberemoved` استفاده کرد:
```jsx
await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream will actually be delivered/i));
```
```tsx
    beforeEach(async () => {
        render(<PhotosList />);
        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    });
```
[waitforelementtoberemoved](https://testing-library.com/docs/dom-testing-library/api-async/#waitforelementtoberemoved)

### Structure
می توان توسط ساختار زیر، از انواع تست استفاده کرد:
```text
command[All]ByQueryType
```
`command`:
در واقع ب 3 دسته کلی تقسیم می شوند:
1. `get`
برای المان هایی ک در `DOM` وجود دارند استفاده می شود.
2. `query`
برای المان هایی ک در `DOM` وجود ندارند استفاده می شود.
3. `find`
برای المان هایی ک به صورت ناهمگام (`async`) در `DOM` ظاهر می شوند استفاده می شود.

`[All]`
می توان برای گرفتن تمام المان ها بر اساس شرط خاصی استفاده کرد ک یک آرایه بر میگرداند.

`QueryType`
ک همان نام شرط هایی می باشد ک استفاده میکنیم مثل:
1. `Role`:
ک برای همه چیز می توان استفاده کرد.
2. `AltText`:
ک برای عکس ها می توان استفاده کرد.
3. `Text`:
ک برای متن ها و المان های متنی می توان استفاده کرد.
4. `form queries`:
ک برای فرم ها می توان استفاده کرد مثل `PlaceholderText`,`LabelText`, `DisplayValue` و ...

🎉 می توان از این موارد به صورت ترکیبی هم استفاده کرد.

### Redux or Context or Router
برای اینکه از `State management` ها یا هرگونه `wrapper` دیگری (مانند `React Router`) در تست هایمان استفاده کنیم، کافیست ب صورت زیر همراه با `render` کامپوننت مورد نظر، آن را صدا بزنیم:
```tsx
render(<Options optionType={OPTION_TYPE.SCOOPS}/>, {wrapper: OrderDetailsProvider});
```
🎉 همچنین می توان در یکجا (`test-utils`) تمامی `wrapper` هایمان را قرار دهیم تا در تمامی فایل ها قابل دسترس و تست باشد و دیگر نیازی ب نوشتن در تمامی تست ها نیست.
```tsx titile="src/test-utils/testing-library-utils.tsx"
import {ReactElement} from "react";
import {render, RenderOptions} from "@testing-library/react";
import {OrderDetailsProvider} from "../contexts/OrderDetails";

const renderWithContext = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, {wrapper: OrderDetailsProvider, ...options});

// re-export everything
export * from "@testing-library/react";

// Override render method
export {renderWithContext as render};
```
[Custom Render](https://testing-library.com/docs/react-testing-library/setup#custom-render)

🎉 حال کافیست در تمامی تست هایی ک لازم است از `wrapper` استفاده شود، بجای `testing-library/react@` از فایل بالا استفاده می کنیم و چون در این فایل همه چیز را از `testing-library` اکسپورت کردیم، پس بقیه موارد نیز مانند `screen` هم از همین فایل قابل استفاده است:
```tsx
import {render, screen} from "../../../test-utils/testing-library-utils";
// ...
render(<Options optionType={OPTION_TYPE.SCOOPS}/>);
```

## fireEvent
هر گاه در تست هایمان نیاز ب شبیه سازی یک `event` باشیم، باید از `fireEvent` و متد های آن استفاده کنیم:
```jsx
  fireEvent.click(checkbox);
```
🎉 در واقع از `click` برای شبیه سازی رویداد های `onClick` و `onChange` (در `checkbox` ها از `onChange` استفاده می شود ک می توان از همان `click` برای آن استفاده کرد) استفاده می شود.

## userEvent
دقیقا مانند `fireEvent` می باشد با این فرق ک امکان تست همزمان چند رویداد را ب ما میدهد و توسط خود `RTL` پیشنهاد شده است:
```jsx
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

    it('Click on button', async () => {
        render(<SummaryForm/>);
        const confirmButton = screen.getByRole("button", {name: /confirm order/i});

        await user.click(confirmButton);
        expect(confirmButton).toBeDisabled();
    });
```

### type & clear
بهتر است برای `input` ها ابتدا از رویداد `clear` استفاده شود و سپس اگر خواستیم رویداد تایپ کردن را شبیه سازی کنیم، از `type` استفاده کنیم:
```tsx
        const vanillaInput = await screen.findByRole("spinbutton", {name: "Vanilla"});
        await user.clear(vanillaInput);
        await user.type(vanillaInput, "1", {delay: 100});
        expect(scoopsSubtotal).toHaveTextContent("2.00");
```
- برای `clear` باید المان `input` مورد نظر را ب آن بدهیم.
- برای `type` نیز باید ابتدا المان `input` مورد نظر و سپس مقداری ک می خواهیم را ب آن بدهیم ک تست کند ک به صورت رشته می باشد.
- اگر در قسمت `options` از `delay` استفاده کنیم، در واقع یک تاخیر بین تایپ شدن حروف قرار میدهد ک برای بعضی از تست ها می توان استفاده کرد و رفتار کاربر را شبیه سازی کرد.

## Debug
می توان توسط `()screen.debug` یه تصویر کلی از شکل `DOM` را مشاهده کرد ک ب ما کمک می کند ک بفهمیم دام چ شکلی است و چ چیز هایی را می توان تست کرد:
```tsx
screen.debug()
```
همچنین موارد زیر ب ما در تست کردن بهتر کمک می کنند:

1. هر گاه بخواهیم فقط یک فایل خاص را اجرا کنیم و دوباره همه فایل های تست را اجرا نکنیم (زیرا اجرای همه فایل ها سرعت اجرای تست را کاهش می دهد)
   کافیست هنگام اجرا بودن `yarn test` دکمه `W` را زده و از بین گزینه ها، دکمه `P` یا `T` را زده ک بر اساس نام فایل، تست را اجرا می کند و فقط کافیست نام فایل را وارد و انتخاب کنیم. و هر گاه نیز بخواهیم فقط تست های `faild` اجرا شوند، کافیست دکمه `F` را بزنیم.
2. هرگاه بعد از `commit` یک فایل را تغییر دهیم ک فایل تست نیز دارد، تست آن دوباره هنگام انجام تست، اجرا می شود حتی اگر فایل تست آن فایل مورد نظر را تغییر نداده باشیم.
3. هرگاه بخواهیم از بین تست های یک فایل فقط یک تست خاص اجرا شود، از `only` استفاده می کنیم (در اینجا 1 تست اجرا میشود):
```tsx
it('Test 1', () => {}); 
it.only('Test 2', () => {});
it('Test 3', () => {}); 
```
4. اما اگر بخواهیم از بین تست ها، تعدادی از آن ها اجرا نشوند از `skip` استفاده میکنیم(در اینجا 2 تست اجرا میشود):
```tsx
it('Test 1', () => {}); 
it.skip('Test 2', () => {});
it('Test 3', () => {});
```
5. بعضی از ارور های احتمالی
![Test Help](/img/test-help.jpg)
6. می توان از `todo` بعد از `it` استفاده کرد ک مشخص کننده این است ک من تست های برای انجام دارم ک بعدا باید آن ها را کامل کنم(باید فقط `description` را بنویسیم و تست نباید `callback` داشته باشد.):
```tsx
it.todo("defaultCount=0, and - clicked then counter = 0");
```
🎉 هر موقع یک کامپوننت می نویسیم، می توان فقط بلاک های کد تست آن را بنویسیم و برای همه آن ها `todo` قرار دهیم و سپس بعدا هرکدام را ک کامل کردیم، می توانیم `todo` آن را حذف کنیم.

## Tips
1. بعد از هربار `commit` کردن، اگر دوباره تست را اجرا کنیم، تست هایی ک `pass` شدند و `commit` شده اند، دیگر نمایش داده نمی شوند و فقط تست های جدیدی ک هنوز `commit` نشده اند اجرا می شوند.
2. در واقع `TDD` یعنی اول تست نوشته شود و بعد کدی نوشته شود ک آن تست ها `pass` شوند. ک به آن `red-green` نیز گفته می شود.
3. در حالت کلی به صورت مثال، ما یک تابع خالی در کامپوننتمان می نویسیم، بعد تست آن را می نویسیم تا ارور بدهد و سپس کد هایی ک میخواییم را مینویسیم تا ارور تست برطرف و `pass` شود.
4. تست به ما اجازه این را می دهد ک بدون نیاز ب مرورگر، بخش های مختلف برناممان را تست کنیم.
5. می توان یک تابع را نیز ب صورت کاملا جدا از کامپوننت ها تست کنیم، فقط کافیست ک آن را ب تستمان اضافه کنیم:
```tsx
export const replaceCamelWithSpaces = (colorName: string) => {
    return colorName.replace(/\B([A-Z])\B/g, " $1"); //* در واقع 1$ یعنی هر حرفی ک پیدا کردی
}
```
```jsx
import {replaceCamelWithSpaces} from './utils';

describe("Spaces before camel-case capital letters", () => {
    test("Works for multiple inner capital letters", () => {
        expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
    });
});
```
6. می توان برای نام دهی فولدر هر تست از `__test__` استفاده کرد و برای هر صفحه، همراه با کامپوننت هایش یک فولدر با این نام ساخته و همه تست ها را در آن قرار می دهیم.
7. در واقع `role` اینپوت هایی ک دارای رنج می باشند، `spinbutton` است. 
[spinbutton Role](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/#:~:text=A%20spinbutton%20is%20an%20input,the%20minute%20of%20an%20hour.)
8. هرگاه یک کامپوننت دارای یک `prop` تابع می باشد، می توان از `()jest.fn` استفاده کرد تا تایپ اسکریپت ب `prop` ما گیر ندهد و در واقع این تابع کار خاصی انجام نمی دهد و فقط یک `placeholder` می باشد:
```tsx
render(<OrderEntry setOrderPhase={jest.fn()}/>); 
```
9. برای نوشتن هر تست باید موارد زیر را در نظر بگیریم:
- چ چیزی باید `render` شود؟
- آیا نیاز است ک `prop` یی پاس دهیم؟
- آیا ب `wrapper` نیاز داریم؟
- تست را باید چگونه و کجا بنویسیم؟ آیا نیاز ب فایل جدید دارد؟
- آیا تست ما نیاز ب استفاده از `async` دارد یا ن؟
10. می توان از سایت زیر برای تست کردن کد هایمان استفاده کنیم. این سایت ب ما تمامی اطلاعات مربوط ب المان مورد نظرمان را می دهد:

[testing playground](https://testing-playground.com/)
11. اگر مستندات داریم، بهتر است بر اساس آن ابتدا `TDD` بنویسیم و از ساختار `Red - Green - Refactor` استفاده کنیم. اگر نداشتیم، ابتدا کامپوننت ساخته شود و سپس تست نوشته شود.
12. توسط دستور زیر می توان یک فایل خاص را توسط `jest` تست کرد:
```shell
jest -- randomBetween.spec.tsx
```

### Async
1. هر گاه بخواهیم یک درخواست `async` داشته باشیم (تمامی درخواست ها به سرور به صورت `async` می باشند) باید برای تست نویسی و پیدا کردن المان های مورد نظر از `await` و `findBy` استفاده کنیم:
```tsx
it("Displays image for each scoop option from the server", async () => {
    render(<Options optionType={OPTION_TYPE.SCOOPS}/>)

    // find the images
    const scoopImages: ReadonlyArray<HTMLImageElement> = await screen.findAllByRole("img", {name: /scoop$/i});
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altsText: ReadonlyArray<string> = scoopImages.map((scoopImage: HTMLImageElement) => scoopImage.alt);
    expect(altsText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
```
2. برای هندل کردن ارور های برگشتی از سمت سرور می توان به صورت زیر عمل کرد:
```tsx title="OrderEntry.test.tsx"
import {render, screen} from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import {rest} from "msw";
import {server} from "../../../mocks/server";

it("Handles error for scoops and topping routes", async () => {
    server.resetHandlers(
        rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
            return res(ctx.status(500));
        }),
        rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
            return res(ctx.status(500));
        })
    );
    render(<OrderEntry/>);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});
```
- حتما باید این در خواست `server.resetHandlers` قبل از `render` صورت بگیرد!
- همچنین می توان بجای `server.resetHandlers` از `server.use` نیز استفاده کرد اما باید دقت داشت ک در فایل `setupTest.ts` از `server.resetHandlers` حتما استفاده کنیم وگرنه درخواست های شبیه سازی شده ما هربار `reset`. نمی شوند و در تست های بعدی ب ارور میخوریم.
- برای اینکه ارور های برگشتی را شبیه سازی کنیم، ابتدا باید سرور شبیه سازی شدمان را (`handlers.ts`) را ریست کنیم زیرا در آن فایل ما حالتی ک داده برمیگردد را شبیه سازی کردیم، حال باید آن را با ارور جایگزین کنیم.
- می توان تمامی `status code` های ممکن را شبیه سازی کرد.
- هرگاه بخواهیم چند تست ک مربوط ب درخواست از سرور است را همزمان چک کنیم، باید از `waitFor` استفاده کنیم، زیرا مثلا در مثال بالا، ما انتظار داریم ک 2 `Alert` در صفحه مشاهده کنیم، پس باید بعد از برگشت اولی، صبر کنیم تا دومی هم برگردد و همزمان چک کنیم ک دو `Alert` صفحه است یا نه! 

## ESLint & plugins
برای اینکه تست ها و کدهایمان طبق یک قانون خاص پیش بروند، می توان از این پکیج `eslint` استفاده کرد ک ب صورت پیش فرض نصب است و فقط کافیست ک پلاگین های مورد نیاز را برای تست نصب کنیم:
```shell
npm init @eslint/config
```
🎉 حال باید به یک سری سوال ب صورت دلخواه و بنا ب استفاده در پروژه جواب بدهیم و سپس می توان موارد زیر را ب `eslintrc.json` اضافه کنیم.
```shell
npm install eslint-plugin-jest-dom eslint-plugin-testing-library
```
🎉 حال باید بخش زیر را از `package.json` حذف کنیم:
```json
{
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  }
}
```
🎉 حال می توان دو `script` زیر را ب `package.json` اضافه و از آن در پروژه استفاده کنیم:
```json
{
  "scripts": {
    "lint": "eslint **/*.{tsx,ts,jsx,js}",
    "lint-fix": "eslint **/*.{tsx,ts,jsx,js} --fix"
  }
}
```
🎉 اولی برای پیدا کردن خطا ها طبق `rules` می باشد و دومی برای برطرف کردن اتوماتیک ارور ها می باشد.
🎉 حال کافیست یک فایل با نام `eslintrc.json.` بسازیم و کد های زیر را ب آن اضافه کنیم:
```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "react-app/jest",
    // "plugin:testing-library/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect" /* latest or 18.2.0 */
    }
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "testing-library",
    "jest-dom"
  ],
  "rules": {
    "semi": ["error", "always"]
  }
}
```

## Mock Service Worker
توسط پکیج زیر می توان ارتباط با سرورمان و داده ها را شبیه سازی کنیم و توسط آن شرط های مربوط به تست هایمان را بنویسیم. توسط این پکیج ما `Unit test` انجام نمی دهیم بلکه فقط `Functional test` می نویسیم:
```shell
npm install msw -D
```
[Mock Service Worker --- Rest API](https://mswjs.io/docs/getting-started/mocks/rest-api)

🎉 می توان هم `rest` و هم `graphQl` نیز شبیه سازی کرد.

🚩 اگر بخواهیم تست هایمان وابسته ب هیچ پکیجی مانند `axios` یا `fetch` نباشد، می توانیم پکیج زیر را نیز برای `fetch` نصب کنیم ک هرجا، با هر پکیجی خواستیم، بتوانیم تست هایمان را اجرا کنیم:
```shell
npm i whatwg-fetch
```
حال کافیست ک در فایل `setup.jest.ts` آن را اضافه کنیم:
```ts title="setup.jest.ts"
import "@testing-library/jest-dom";
import 'whatwg-fetch'
```

1. حال باید یک فایل را در این مسیر و با این نام بسازیم : `src/mocks/handlers.js` و برای استفاده از `rest` باید آن را اضافه کنیم.
2. سپس باید `API` هایی ک می خواهیم را به صورت یک آرایه و آن را ب صورت زیر بنویسیم:
```ts title="src/mocks/handlers.js"
import {rest} from "msw";

export const handlers = [
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
        return res(
          // ctx.delay(10), // make a delay for response
            ctx.json([
                {name: "Chocolate", imagePath: "/images/chocolate.png"},
                {name: "Vanilla", imagePath: "/images/vanilla.png"}
            ])
        );
    })
];
```
[Response Resolver](https://mswjs.io/docs/getting-started/mocks/rest-api#response-resolver)

🎉 بعضی مواقع `delay` برای چک کردن یک المان مانند `loading` بسیار کارساز است. همچنین می توان بدون `delay` و با `screen.query` نیز همینکار را انجام داد.

- حال اگر ما نیاز ب تست `Query param` داشته باشیم، می توانیم ب صورت زیر، آن را برای درخواست `mock` ما مشخص کنیم:
```ts title="src/mocks/handlers.ts"
export const handlers = [
    rest.get<DefaultBodyType, PathParams<string>, Photo[]>("/api/photos", (req, res, ctx) => {
        const name = req.url.searchParams.get("name") || "Unknown"
        return res(
            ctx.json([
                {
                    id: 1,
                    thumbnailUrl: "/photo1.png",
                    title: `${name}: Hello World`,
                    favourite: false
                }
            ]))
    })
]
```
[Query Params](https://mswjs.io/docs/recipes/query-parameters)

🎉 در لینک بالا هم می توان از حالت یک `query param` استفاده کرد و هم چند `query param`

3. حال باید یک فایل دیگر برای شبیه سازی سرورمان در آدرس `src/mocks/server.js` بسازیم و از کد های زیر استفاده کنیم:
```ts title="src/mocks/server.js"
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)
```
[Node Server](https://mswjs.io/docs/getting-started/integrate/node#configure-server)

🎉 همچنین می توان از مرورگر نیز برای شبیه سازی استفاده کرد.

4. حال باید در فایل `src/setupTests.js` (ک به صورت پیش فرض با `create react app` ساخته می شود) کد های زیر را به کد های قبلی اضافه کنیم:
```ts title="src/setupTests.js --OR-- src/setup.jest.ts"
import { server } from './mocks/server'

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
```
[Create React App Config](https://mswjs.io/docs/getting-started/integrate/node#using-create-react-app)

🎉 همچنین می توان از لینک زیر برای پروژه ای ک بدون `create-react-app` ساخته شده است، استفاده کرد:

[Manual Setup](https://mswjs.io/docs/getting-started/integrate/node#using-manual-setup)

5. در حالتی ک `api` ما به صورت داینامیک می باشد و هربار لازم است ک `path param` خاصی بدهیم، بهتر است ک برای جلوگیری از ب وجود آمدن ارور، از چند `api` با مقادیر ثابت استفاده کنیم و فقط آن ها را تست کنیم:
```ts title="handlers.ts"
[
   rest.get<DefaultBodyType, PathParams<string>, string[]>("/api/cars/:country", (req, res, ctx) => {
      return res (
              ctx.delay(100),
              ctx.json([`${req.params.country.toString()} B1`, `${req.params.country.toString()} B2`])
      )
   })
]
```
مثلا ب جای مثال بالا از مثال پایین استفاده میکنیم و در آخر برای اطمینان، مثال بالا را نیز در انتهای همه `use case` ها قرار می دهیم:
```ts title="handlers.ts"
[
   rest.get<DefaultBodyType, PathParams<string>, string[]>("/api/cars/france", (req, res, ctx) => {
      return res (
              ctx.delay(100),
              ctx.json(["Custom France B1", "Custom France B2"])
      )
   }),
   rest.get<DefaultBodyType, PathParams<string>, string[]>("/api/cars/germany", (req, res, ctx) => {
      return res (
              ctx.delay(100),
              ctx.json(["Custom Germany B1", "Custom Germany B2"])
      )
   }),
   rest.get<DefaultBodyType, PathParams<string>, {message: string}>("/api/cars/germany", (req, res, ctx) => {
      return res (
              ctx.delay(100),
              ctx.status(500),
              ctx.json({message: "Unit test message"})
      )
   })
]
```

---
---
---


#### Github Actions CI (old)
می توان پروژه خود را روی `git` قرار داد و ب وسیله `actions` خود گیتهاب، تست ها را ب صورت اتوماتیک اجرا کرد.(`CI Pipeline`)
1. وارد `repo` پروژه مورد نظر می شویم و بعد وارد تب `actions` می شویم
2. سپس اگر پروژه ما از `node` استفاده می کند برای اجرا شدن، آن را انتخاب میکنیم.
3. حال می توان فایل `yml.` ایجاد شده را بر اساس نیاز خودمان تغییر دهیم
```yaml
name: CI2

env:
  SCREENER_API_KEY: ${{ secrets.SCREENER_API_KEY }}
  SAUCE_USERNAME: ${{ secrets.SAUCE_USERNAME }}
  SAUCE_ACCESS_KEY: ${{ secrets.SAUCE_ACCESS_KEY }}

on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    # Using npm ci is generally faster than running npm install
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
    - run: npm start & npx wait-on --timeout 60000
```
4. حال می توان در سیستممان از ریپو یک `pull` بگیریم و تغییرات را روی سیستم داشته باشیم.
5. حال با هر `push` در واقع `pipeline` ساخته شده یک بار اجرا می شود و تست ها را انجام میدهد و در صورت درست بودن همه چیز، اجازه مرج شدن کد ها را می دهد.

#### Link & Text (old)
برای اینکه یک لینک را تست کنیم می توان از دستور زیر استفاده کرد :
```tsx title="App.test.tsx"
test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toHaveAttribute("href", "https://reactjs.org")
});
```
🎉 توسط `()toHaveAttribute` این متد می توان تمامی `attribute` های یک تگ را تست کنیم ک پارامتر اول نام ویژگی و دومی مقدار مورد نظر آن ویژگی می باشد.

🎉 همیشه بهتر است ک از یک `-data` استفاده شود چون ب صورت داینامیک می باشد.
```tsx title="App.test.tsx"
test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId("learn-test");
  expect(linkElement).toHaveAttribute("href", "https://reactjs.org")
});
```
باید در المان مورد نظر هم استفاده شود:
```tsx title="App.tsx"
        <a className="App-link" href="https://reactjs.org" target="_blank" data-testid="learn-test">
          Learn Testing and Dev
        </a>
```

#### Visual e2e test (webdrive) (old)
توسط این پکیج می توان به صورت اتوماتیک پروژمان را تست کنیم (البته ب صورت `manual`) یعنی در مرورگر به صورت خودکار مثلا فرم ما پر و سپس ارسال می شود.
[webdrive.io](https://webdriver.io/)
```shell
npm init wdio .
```
سپس می توان ب سوالات ب صورت دلخواه پاسخ داد اما در اینجا من فقط به یک نمونه اشاره می کنم:

<div dir="ltr">
  1. A project named ... ? Y <br />
  2. local - for e2e testing of web and mobile applications <br />
  3. In the cloud using Sauce Labs <br />
  4. Environment variable for username? Enter <br />
  5. Environment variable for access key? Enter <br />
  6. In which region do you want to run your Sauce Labs tests in? us <br />
  7. Which framework do you want to use? (Use arrow keys) Mocha <br />
  8. Do you want to use a compiler? No! <br />
  9. Do you want WebdriverIO to autogenerate some test files? (Y/n) Y <br />
  10. Where should these files be located? Enter <br />
  11. Do you want to use page objects ? No <br />
  12. Which reporter do you want to use? spec <br />
  13. Do you want to add a plugin to your test setup? Wait for-it <br />
  14. Do you want to add a service to your test setup? chromedriver, sauce <br />
  15. What is the base url? (http://localhost) http://localhost:3000 <br />
  16. Do you want me to run `npm install` Yes <br />
</div>

🎉 برای گزینه 4 و 5 ما باید در `github` یا همان فایل `yml.` مان باید `Environment Variables` مورد نظر را اضافه کنیم (طبق نمونه)

حال باید یک پکیج دیگر را نیز نصب کنیم:
```shell
npm i @dwio/sync
```




## Jest
در واقع می توان یکسری از تست هایمان را از `jest` کمک بگیریم، مثل `mock` کردن یک مقدار:
### spyOn and mock
1. شبیه سازی یک عدد `random`
```tsx title="randomBetween.tsx"
export function randomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```
[jest spyOn](https://jestjs.io/docs/jest-object#jestspyonobject-methodname)
```tsx title="randomBetween.spec.tsx"
import {randomBetween} from "./randomBetween";

const randomSpy = jest.spyOn(Math, "random");

describe("When Math.random() returns 0", () => {
   beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0);
   });
   it("Called with min=3 and max=5 returns 3", () => {
      expect(randomBetween(3, 5)).toBe(3);
      expect(randomSpy).toHaveBeenCalledTimes(1);
   })
});
```
🎉 توسط `spyOn` می توان یک شبیه سازی از متد مورد نظر (متد های داخلی خود جاوا اسکریپت مثل `console.log` یا `Math.random`و...) انجام داد و مشخص کرد ک دقیقا چ مقداری را می خواهیم ک برگرداند ک آرگومان اول آن، نام آبجکت (متد) مورد نظر است و آرگومان دوم آن، متد مورد نظر داخل آن آبجکت می باشد.

- در اینجا می توان توسط `()mockClear` تمامی داده های ذخیره شده در پاک کنیم و ب `mock` بگوییم ک بدون در نظر گرفتن داده قبلی اجرا شو.
[mockClear()](https://jestjs.io/docs/mock-function-api/#mockfnmockclear)

- توسط `toHaveBeenCalledTimes(1)` شرط ما انتظار داریم ک این متد، در این تست فقط 1 بار اجرا شود.
- همچنین می توان از `({}<=())randomSpy.mockClear().mockImplementation` هم برای سفارشی سازی مقدار بازگشتی هم استفاده کرد:
[mockImplementation()](https://jestjs.io/docs/mock-function-api/#mockfnmockimplementationfn)

### jest.fn(), toHaveBeenCalled(), toHaveBeenCalledTimes 
2. بعضی وقت ها نیاز است ک ب کامپوننتمان یک تابع پاس بدهیم وباید ب آن تابع نیز در کامپوننت فرزند یک مقداری را پاس بدهیم ک در این حالت می توان ب صورت زیر عمل کرد:
```tsx
describe("onMoney function with 33 dollars", () => {
    it("renders Material-UI grid with columnDefs and rowData", async () => {
        const myOnMoney= jest.fn();
        render(<Example2 onMoney={myOnMoney}/>);
        await user.click(screen.getByRole("button", {name: /give me 33 dollars/i}));
        expect(myOnMoney).toHaveBeenCalledTimes(1);
        expect(myOnMoney).toHaveBeenCalledWith(33);
    });
});
```
- اگر بخواهیم ب تابعمان پارامتر های درخواستی را پاس بدهیم، می توانیم از `toHaveBeenCalledWith` این `matcher` استفاده کنیم.
[toHaveBeenCalledWith](https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-)
- توسط `toHaveBeenCalledTimes` نیز می توان تعداد دفعات اجرای تابع را مشخص کرد.
[toHaveBeenCalledTimes](https://jestjs.io/docs/expect#tohavebeencalledtimesnumber)

### mock packages & components, jest.mock(), mocked
3. بعضی مواقع لازم است ک ما یک پکیج را شبیه سازی کنیم و آن را با مقادیر دلخواه تست کنیم:
```tsx
import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import {columns, Example2, rows} from "../Example2";
import {mocked} from "jest-mock";
import {DataGrid} from "@mui/x-data-grid";

jest.mock("@mui/x-data-grid", () => ({
    ...jest.requireActual("@mui/x-data-grid"),
    DataGrid: jest.fn(() => <div>Table</div>)
}));

const mockedDataGrid = mocked(DataGrid);

describe("onMoney function with 33 dollars", () => {
    beforeEach(() => {
        mockedDataGrid.mockClear();
    })
    it("renders table passing the expected props", () => {
        render(<Example2 onMoney={jest.fn}/>);
        expect(mockedDataGrid).toHaveBeenCalledTimes(1);
        expect(mockedDataGrid).toHaveBeenCalledWith({
            rows: rows,
            columns: [
                expect.objectContaining({field: "id"}),
                expect.objectContaining({field: "firstName"}),
                expect.objectContaining({field: "lastName"}),
                expect.objectContaining({field: "age"})
            ],
            pageSize: 5,
            checkboxSelection: true,
            rowsPerPageOptions: [5]
        }, {})
    })
});
```
- توسط `()jest.mock` می توان یک پکیج را شبیه سازی کرد ک ب عنوان آرگومان اول باید پکیج را ب آن بدهیم و ب عنوان آرگومان دوم (اگر می خواهیم یکی از متد های داخل پکیج را تغییر دهیم) یک تابع پاس میدهیم ک می توان فقط نام متد مورد نظر را نوشت و یا همه متد ها را صدا بزنیم و بعد متد مورد نظر را صدا بزنیم و تغییر دهیم، مانند مثال بالا.
- هر گاه بخواهیم تمامی متد ها و کامپوننت های داخل یک پکیج را صدا بزنیم، از `()jest.requireActual` استفاده میکنیم.

🎉 در واقع در اینجا ما فقط `DataGrid` را صدا زده و توسط `jest.fn` مقدار آن را تغییر داده ایم.

- توسط `()mocked` نیز دقیقا کامپوننت مورد نظر را از پکیج مورد نظر صدا میزنیم و آن را شبیه سازی میکنیم
- اگر ابتدا توسط `jest.mock` آن کامپوننت و متد مورد نظر شبیه سازی نکنیم، نمی توانیم از متدهایی مثل `()mockClear` استفاده کنیم.
- حال ک کامپوننت مورد نظر را شبیه سازی کرده ایم، باید `prop` های مورد نیاز را نیز ب آن بدهیم ک در اینجا `row` و `column` می باشند.
- هر زمان در یک آبجکت یا آرایه، فقط فیلد هایی ک برایمان مهم است را میخواهیم تست کنیم، از `()expect.objectContaining` استفاده می کنیم.

#### mocked().mockImplementation
4. 🚩 برای کامپوننت های خودمان (`custom`) از کد زیر استفاده می کنیم اما برای کامپوننت های پکیج ها، می توان از `jest.mock` استفاده کرد:
```tsx
jest.mock("../example3/Drawer");
mocked(Drawer).mockImplementation(() => <div>mocked: drawer</div>);

describe("Example4", () => {
    it("renders Drawer", () => {
        render(<Example4/>);
        expect(screen.queryByText("Hello Drawer Component!")).not.toBeInTheDocument();
        expect(screen.getByText("mocked: drawer")).toBeInTheDocument();
    })
})
```
🎉 در واقع توسط `mockImplementation` ما مقادیر داخل کامپوننتمان را با `mocked: drawer` جایگزین می کنیم.

5. بعضی مواقع ما یک کامپوننت بسیار پیچیده داریم و نمی خواهیم ک آن را ب صورت کلی تست کنیم، در این حالت هم می توان آن را به یک ورژن ساده تر شبیه سازی کرد و سپس آن را تست کرد:
- برای اینکار ابتدا باید در همان فولدریی ک کامپوننت پیچیده ما وجود دارد، یک فولدر با نام `__mocks__` ساخت
- سپس دقیقا یک کامپوننت دیگر با همان نام کامپوننت پیچیده مان می سازیم
- حال موارد بسیار ساده تر و مواردی ک می خواهیم شبیه سازی و تست کنیم را در این فایل قرار می دهیم
- حال ب صورت زیر می توانیم فایل جدید را جایگزین فایل اصلی کنیم و سپس آن را تست کنیم:
```tsx
import {render, screen} from "@testing-library/react";
import {Example5} from "../Example5";

jest.mock("../../../../pages/VeryComplex/DeepFolder/DeeperFolder/VeryComplex");

describe("Example 5", () => {
   it("Renders very complex component", () => {
      render(<Example5/>);
      // expect(screen.getByText("Very Complex Component")).toBeInTheDocument();
      expect(screen.getByText("Simple Version of Very Complex")).toBeInTheDocument();
   })
}) 
```
🎉 در حالتی ک فایل اصلی را تست میکنیم، خط کامنت شده `pass` می شود اما بعد از اینکه از `jest.mock` استفاده کردیم و فایل جایگزین را صدا زدیم، دیگر آن `assertion` پاس نمی شود.
