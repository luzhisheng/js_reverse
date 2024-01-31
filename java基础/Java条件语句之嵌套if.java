// 嵌套 if 语句，只有当外层 if 的条件成立时，才会判断内层 if 的条件。
public class Java条件语句之嵌套if {
    public static void main(String[] args) {
        int score = 94;
        String sex = "女";

        if (score > 80){
            if(sex.equals("女")){
                System.out.println("进入女子组决赛");
            }
        }
    }
}
