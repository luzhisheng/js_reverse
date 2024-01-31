public class Java数组遍历 {
    public static void main(String[] args) {
        // 定义一个长度为 3 的字符串数组，并赋值初始值
        String[] hobbys = {"sports", "game", "movie"};
        System.out.println("循环输出数组中元素的值：");

        // 使用循环遍历数组中的元素
        for (int i = 0; i < hobbys.length; i++) {
            System.out.println(hobbys[i]);
        }
    }
}
