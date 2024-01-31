// continue 的作用是跳过循环体中剩余的语句执行下一次循环。
public class Java循环跳转语句之continue {
    public static void main(String[] args) {

        int sum = 0; // 保存累加值

        for (int i = 1; i <= 10; i++) {

            // 如果i为奇数,结束本次循环，进行下一次循环
            if (i > 31) {
                continue;
            }
            sum = sum + i;
        }
        System.out.print("1到10之间的所有偶数的和为：" + sum);
    }
}
