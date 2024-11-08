import { shallowRef } from 'vue';

const user = shallowRef({ name: 'Alice', age: 30 });

// 修改 user 本身会触发更新
user.value = { name: 'Bob', age: 25 }; // 响应式触发

// 修改 user.value 的属性不会触发更新
user.value.name = 'Charlie'; // 不会触发响应式更新


import { shallowReactive } from 'vue';

const user = shallowReactive({
name: 'Alice',
age: 30,
address: {
city: 'New York',
zip: '10001'
}
});

// 修改一级属性会触发响应式更新
user.name = 'Bob'; // 响应式触发

// 修改嵌套属性不会触发响应式更新
user.address.city = 'Los Angeles'; // 不会触发响应式更新
