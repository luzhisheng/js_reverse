#include <stdio.h>
#define NUMBER 3

int main()
{
    int a = 10;
#ifdef DEBUG
    printf("111111111111\n");
#endif
    for(int i=0; i<NUMBER; ++i)
    {
        printf("hello, GCC|||\n");
    }
    return 0;
}