//循环体中包含循环语句的结构称为多重循环。三种循环语句可以自身嵌套，也可以相互嵌套，最常见的就是二重循环。在二重循环中，外层循环每执行一次，内层循环要执行一圈。
public class Java循环语句之多重循环 {
    public static void main(String[] args) {

        System.out.println("打印直角三角形");

        // 外层循环控制行数
        for (int i = 1; i < 4; i++) {

            // 内层循环控制每行的*号数
            // 内层循环变量的最大值和外层循环变量的值相等
            for (int j = 1; j <= i; j++) {

                System.out.print("*");
            }

            // 每打印完一行后进行换行
            System.out.println();
        }
    }
}
