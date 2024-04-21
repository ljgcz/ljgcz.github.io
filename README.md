# ljgcz

$$e^{i\pi}+1=0$$

```cpp
vector<int> sleepSort(const vector<int>& nums) {
    vector<int> sortedResult;
    vector<thread> threads;

    auto sleepAndPush = [&sortedResult](int num) {
        this_thread::sleep_for(chrono::milliseconds(num));
        sortedResult.push_back(num);
    };

    for (int num : nums) {
        threads.emplace_back(sleepAndPush, num);
    }

    for (auto& thread : threads) {
        thread.join();
    }

    return sortedResult;
}
```
<p align="center">
  <img width="460" height="300" src="https://upload.wikimedia.org/wikipedia/commons/0/00/Iching-hexagram-15.svg">
</p>
