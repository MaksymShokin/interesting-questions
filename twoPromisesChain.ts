const str1 = 'string1';
const data1 = 'some data 1';
const data2 = 'some data 2';

const t = () =>
  asyncFunction1(str1)
    .then(({ data, str: str2 }) =>
      asyncFunction2(str2).then(({ data: data2 }) => data + data2)
    )
    .catch(error => console.log(error));

const asyncFunction1 = (str: string): Promise<{ data: string; str: string }> =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve({ data: data1, str }), 1000)
  );

const asyncFunction2 = (str: string): Promise<{ data: string }> =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve({ data: data2 }), 1000)
  );

t().then(res => console.log(res));
