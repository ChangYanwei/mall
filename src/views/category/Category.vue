<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <button @click="btnClick">按钮</button>
      <li>内容1</li>
      <li>内容2</li>
      <li>内容3</li>
      <li>内容4</li>
      <li>内容5</li>
      <li>内容6</li>
      <li>内容7</li>
      <li>内容8</li>
      <li>内容9</li>
      <li>内容10</li>
      <li>内容11</li>
      <li>内容12</li>
      <li>内容13</li>
      <li>内容14</li>
      <li>内容15</li>
      <li>内容16</li>
      <li>内容17</li>
      <li>内容18</li>
      <li>内容19</li>
      <li>内容20</li>
      <li>内容21</li>
      <li>内容22</li>
      <li>内容23</li>
      <li>内容24</li>
      <li>内容25</li>
      <li>内容26</li>
      <li>内容27</li>
      <li>内容28</li>
      <li>内容29</li>
      <li>内容30</li>
      <li>内容31</li>
      <li>内容32</li>
      <li>内容33</li>
      <li>内容34</li>
      <li>内容35</li>
      <li>内容36</li>
      <li>内容37</li>
      <li>内容38</li>
      <li>内容39</li>
      <li>内容40</li>
      <li>内容41</li>
      <li>内容42</li>
      <li>内容43</li>
      <li>内容44</li>
      <li>内容45</li>
      <li>内容46</li>
      <li>内容47</li>
      <li>内容48</li>
      <li>内容49</li>
      <li>内容50</li>
      <li>内容51</li>
      <li>内容52</li>
      <li>内容53</li>
      <li>内容54</li>
      <li>内容55</li>
      <li>内容56</li>
      <li>内容57</li>
      <li>内容58</li>
      <li>内容59</li>
      <li>内容60</li>
      <li>内容61</li>
      <li>内容62</li>
      <li>内容63</li>
      <li>内容64</li>
      <li>内容65</li>
      <li>内容66</li>
      <li>内容67</li>
      <li>内容68</li>
      <li>内容69</li>
      <li>内容70</li>
      <li>内容71</li>
      <li>内容72</li>
      <li>内容73</li>
      <li>内容74</li>
      <li>内容75</li>
      <li>内容76</li>
      <li>内容77</li>
      <li>内容78</li>
      <li>内容79</li>
      <li>内容80</li>
      <li>内容81</li>
      <li>内容82</li>
      <li>内容83</li>
      <li>内容84</li>
      <li>内容85</li>
      <li>内容86</li>
      <li>内容87</li>
      <li>内容88</li>
      <li>内容89</li>
      <li>内容90</li>
      <li>内容91</li>
      <li>内容92</li>
      <li>内容93</li>
      <li>内容94</li>
      <li>内容95</li>
      <li>内容96</li>
      <li>内容97</li>
      <li>内容98</li>
      <li>内容99</li>
      <li>内容100</li>
      <li>内容101</li>
      <li>内容102</li>
      <li>内容103</li>
      <li>内容104</li>
      <li>内容105</li>
      <li>内容106</li>
      <li>内容107</li>
      <li>内容108</li>
      <li>内容109</li>
      <li>内容110</li>
      <li>内容111</li>
      <li>内容112</li>
      <li>内容113</li>
      <li>内容114</li>
      <li>内容115</li>
      <li>内容116</li>
      <li>内容117</li>
      <li>内容118</li>
      <li>内容119</li>
      <li>内容120</li>
      <li>内容121</li>
      <li>内容122</li>
      <li>内容123</li>
      <li>内容124</li>
      <li>内容125</li>
      <li>内容126</li>
      <li>内容127</li>
      <li>内容128</li>
      <li>内容129</li>
      <li>内容130</li>
      <li>内容131</li>
      <li>内容132</li>
      <li>内容133</li>
      <li>内容134</li>
      <li>内容135</li>
      <li>内容136</li>
      <li>内容137</li>
      <li>内容138</li>
      <li>内容139</li>
      <li>内容140</li>
      <li>内容141</li>
      <li>内容142</li>
      <li>内容143</li>
      <li>内容144</li>
      <li>内容145</li>
      <li>内容146</li>
      <li>内容147</li>
      <li>内容148</li>
      <li>内容149</li>
      <li>内容150</li>
      <li>内容151</li>
    </ul>
  </div>
</template>

<script>

  import BScroll from 'better-scroll';

  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: 3,
        pullUpLoad: true
      });

      this.scroll.on('scroll',position => {
        // console.log(position);
      })

      this.scroll.on('pullingUp',() => {
        console.log('上拉加载更多');
      })
    },
    methods: {
      btnClick() {
        console.log('---');
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 300px;
    background-color: #42b983;
    /*overflow: hidden;*/
    /*overflow-y: scroll;*/
  }
</style>
