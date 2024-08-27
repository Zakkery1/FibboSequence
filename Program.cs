namespace FibboSequence;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine(0);
        Console.WriteLine(1);
        static void Fibbo(int x, int y, int count)
        {
            int prev1 = x;
            int prev2 = y;
            if( count <= 20)
            {
                count += 1;
                int current = prev1 + prev2;
                prev1 = prev2;
                prev2 = current;
                Console.WriteLine(current);
                Fibbo(prev1, prev2, count);
            }
        }

        Fibbo(0, 1, 0);
    }
}
