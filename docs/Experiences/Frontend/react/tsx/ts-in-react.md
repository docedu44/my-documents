---
id: ts-in-react
title: TS in React
---

## Install
برای استفاده از `ts` می توان از دستورات زیر برای ساخت یک پروژه پیکربندی شده با `ts` استفاده کرد:
```shell
npx create-react-app my-app --template typescript
npx create-next-app my-app --ts
# or
yarn create react-app my-app --template typescript
```
یا اگر پروژه ما از قبل ساخته شده است و می خواهیم ب آن `ts` را اضافه کنیم، می توان از پکیج های زیر استفاده کنیم:
```shell
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
# or
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```
🎉 همچنین باید دقت داشت ک بعد از نصب پکیج ها باید تمام فایل های `js` و `jsx` را ب `ts` و `tsx` تبدیل کنیم و یکبار پروژه را `reset`کنیم.

🎉 همچنین باید حواسمان باشد ک بعد از تغییر فرمت فایل ها، حال باید تایپ ها را در پروژه درست کنیم و پارامتر ها، آرگومان ها و خیلی موارد دیگر را تایپ دهی کنیم.

## TypeScript
### props
می توان به صورت زیر کامپوننت و `prop` ها در `tsx` استفاده کرد، در واقع در این روش می توان هم برای `prop` و هم برای کامپوننت `type` مشخص کرد:

```tsx
    interface ChildProps {
    color: string;
    onClick: (msg: string) => void;
}
    export const Child = ({color, onClick}: ChildProps) => {
    return (
        <div>
            <h1>{color}</h1>
            <button onClick={() => onClick("first")}>Click me</button>
        </div>
    )
}
    Child.defaultProps = {
    color: "blue"
}
    export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return (
        <div>
            <h1>{color}</h1>
            <button onClick={() => onClick("second")}>Click me</button>
        </div>
    )
};
    ChildAsFC.defaultProps = {
        color: "green"
    }
```
که روش دوم بهتر است زیرا `ts` متوجه کامپوننت می شود.

🎉 برای استفاده از `children` در  `tsx` بهتر است از روش دوم استفاده شود زیرا `ts` کامپوننت را می شناسد، در روش اول باید حتما در `interface` حتما `children` را تعریف کنیم.

همچنین می توان از روش زیر برای استفاده از چند `interface` استفاده کرد:
```tsx
import DrawerProps from "..."
interface ICustomDrawer {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    children: ReactNode;
}

const CustomDrawer: FC<ICustomDrawer & DrawerProps> = ({visible, setVisible, children, ...props}) => {/*...*/};
```

### state
برای تعریف `type` برای `state` ها میتوان به صورت زیر عمل کرد و برای هر `useState` از یک `generic` خاص استفاده کرد:
```tsx
const GuestList: React.FC = () => {

    const [name, setName] = useState("");
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setGuests([...guests, name]);
        setName("");
    }
}
```
🎉 اگر این کار را انجام ندهیم، خود `ts` برای متغییری مثل `guests` از تایپ `[]never` استفاده می کند

### Union
در `react ` هم می توان از `union` تایپ ها نیز استفاده کرد ک بسیار کاربردی می باشد، زمانی ک بخواهیم مشخص کنیم ک یک متغییر امکان دارد ک چند تایپ داشته باشد، از آن استفاده می کنیم:

```tsx
    const [user, setUser] = useState<{ name: string, age: number | undefined }>()
```

### Generic
در واقع می توان توسط `generic` ها می توان یک `wrapper` برای `interface` هایمان تعریف کنیم:
```tsx
//! for all API responses
export interface IResponse<T> {
  results: T;
}
```
🎉 در این حالت می توان برای همه `api` ها ک همه دارای یک `property` ب نام `result` هستند مشخص کرد ک درون این `result` چ چیز هایی باید باشد و `interface` مربوط ب آن را بجای `T` قرار می دهیم.

### event
برای اینکه از `event` در توابع خود استفاده کنیم، باید حتما تایپ را برای آن ها نیز مشخص کنیم:
```tsx
const EventComponent: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    }

    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e)
    }

    return (
        <div>
            <input onChange={onChange}/>
            <div draggable onDragStart={onDragStart}>Drag Me!</div>
        </div>
    )}
```
🎉 برای راحتی کار، میتوان موس را روی `event` مورد نظر قرار داد و تایپ مربوط  به آن را کپی کنیم و در تابع خود استفاده کنیم.

### ref
برای `ref` نیز باید تایپ تگی که به آن رفرنس زدیم را مشخص کنیم و مقدار اولیه آن را `null` قرار دهیم، زیرا هنگام لود شدن، به چیزی رفرنس نمی شود:
```tsx
    const inputRef = useRef<HTMLInputElement | null>(null);
```
🎉 همچنین اگر بخواهیم مشخص کنیم ک این المان `null` نیست، می توانیم از عملگر `not-null` استفاده کنیم:
```tsx
const scrollRef = useRef<HTMLDivElement>(null!);
```
🎉 اگر در `tsconfig.json` بجای `jsx: preserve` یا `jsx: react` از `jsx: react-jsx` استفاده کنیم، دیگر نیازی ب `import` کردن `react` در همه کامپوننت ها نیست ( این قابلیت از ورژن 17 به بعد ب `react` اضافه شده است )

🎉 هرگاه بخواهیم در یک آبجکت در `interface` کاری کنیم ک بتوان ب صورت دلخواه، در جاهای مختلف از پراپرتی های مختلف استفاده کنیم، باید ب صورت زیر عمل کنیم:
```ts
export interface IRoutes {
    path: string,
    component: any,
    layout: LayoutsEnum,
    meta?: {
        authRequired: boolean,
        [propName: string]: unknown // propName is just a name
    },
    children?: IRouteChildren[]
}
```


## Tips
### .env types
می توان ب صورت زیر برای فایل های `env.` تایپ مشخص کرد:
```ts title="src/types/environment.d.ts"
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
    }
  }
}
```

### S.O.L.I.D in OOP
این 5 اصل در برنامه نویسی بسیار مهم است:

1. SRP - Single Responsibility Principle
   (اصل مسئولیت واحد)
- هر کلاس، تابع یا کامپوننت باید فقط یک کار خاص انجام دهد و تنها یک وظیفه داشته باشد.
- مثلا اگر صفحه ای داریم برای نمایش محصولات و ریتنگ، بهتر است ک لیست محصولات، ریتینگ را در کامپوننت های جداگانه قرار دهیم.
- همجین هر زمان ک از `useState` و `useEffect` همزمان در یک کامپوننت استفاده می کنیم، بهتر است ک یک `custom hook` برای آن ها استفاده کنیم.

2. OCP - Open-Closed Principle
   (اصل باز-بسته)
- بهتر است تمامی کامپوننت ها ب گونه طراحی شوند، ک نیاز نباشد برای تغییر در یک مقدار، کد های داخل کامپوننت را نیز دوباره تغییر دهیم.
- مثلا برای شرطی کردن کد های درون یک کامپوننت، می توان مواردی ک می خواهیم را ب صورت `props` ارسال کنیم، مانند `icon` ها.

3. LSP - Liskov Substitution Principle
   (اصل جایگزینی لیسکوف)
- هنگام طراحی هر کامپوننت باید دقت داشت ک اگر از یک کامپوننت اصلی استفاده می کنیم، مثل `input`، حتما برای آن `interface` قرار دهیم و از اینترفیس اصلی اینپوت ها نیز `extends` کنیم،
  همچنین تمامی `props` های مورد نیاز آن کامپوننت را نیز ب صورت `restProps...` ارسال کنیم.

4. ISP - Interface Segregation Principle
   (اصل جداسازی رابط)
- در واقع در این اصل باید فقط مواردی را ک یک کامپوننت نیاز دارد را ب آن پاس بدهیم،
مثلا اگر می خواهیم از عکس یک محصول در یک کامپوننت استفاده کنیم، باید فقط آن عکس را بفرستیم، ن کل آبجکت محصول را.

5. DIP - Dependency Inversion Principle
   (اصل وارونگی وابستگی)
- در این اصل در واقع باید سطح `abstraction` را رعایت کنیم، یعنی بجای اینکه همه چیز را درون یک کامپوننت انجام دهیم،
مواردی را امکان دارد ب صورت داینامیک باشند را در یک لول بالاتر از کامپوننت اصلی بسازیم و آن ها را `props` ارسال کنیم.
- مثلا بحای اینکه `onsubmit` را درون کامپوننت فرممان قرار دهیم، آن را ب یک لول بالا تر بفرستیم، تا بتوانیم موارد داخل فرم را ب آدرس های مختلف `submit` کنیم.

### Coding rules
1. **KISS**: Keep It Simple, Stupid
2. **DRY**: Don't Repeat Yourself

### types in packages
1. بعضی از پکیج هایی ک در پروژه های `ts` نصب می کنیم، باید ب صورت جداگانه حتما `type` های آن را نیز نصب کنیم وگرنه ب ارور می خوریم، مثل نمونه پایین:
```shell
yarn add react-helmet
# and
yarn add @types/react-helmet -D
```
2. بعضی مواقع `typescript` تایپ داده مارا نمی داند و یا ب صورت پیش فرض تایپ آن را چیزی انتخاب میکند ک ما می دانیم المان ما آن تایپ را ندارد، در این حالت می توان از `as` استفاده کرد ک به آن `Type Assertions` می گویند.
```tsx
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const token = Cookies.get("iopieT") as string;
```
3. هرگاه در تایپ اسکریپت، بخواهیم از ویدئو استفاده کنیم، باید در یک فایل با پسوند `d.ts.` در فولدر `src` ب صورت زیر، آن را معرفی کنیم یا از فایل پیش فرض خود `react` ب نام `react-app-env.d.ts` استفاده کنیم:
```ts title="react-app-env.d.ts"
declare module '*.mp4' {
    const src: string;
    export default src;
}
```
