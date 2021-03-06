/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send;

  Opal.add_stubs(['$bcdice', '$set2Decks2Jokers', '$cardTrader', '$card_place=', '$-', '$canTapCard=', '$<=', '$+', '$==', '$>=', '$>']);
  return (function($base, $super, $parent_nesting) {
    function $ChaosFlare(){};
    var self = $ChaosFlare = $klass($base, $super, 'ChaosFlare', $ChaosFlare);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_ChaosFlare_postSet_1, TMP_ChaosFlare_gameName_2, TMP_ChaosFlare_gameType_3, TMP_ChaosFlare_getHelpMessage_4, TMP_ChaosFlare_check_2D6_5;

    
    
    Opal.defn(self, '$postSet', TMP_ChaosFlare_postSet_1 = function $$postSet() {
      var self = this, $writer = nil;

      if ($truthy(self.$bcdice())) {
        
        self.$bcdice().$cardTrader().$set2Decks2Jokers();
        
        $writer = [0];
        $send(self.$bcdice().$cardTrader(), 'card_place=', Opal.to_a($writer));
        $writer[$rb_minus($writer["length"], 1)];;
        
        $writer = [false];
        $send(self.$bcdice().$cardTrader(), 'canTapCard=', Opal.to_a($writer));
        return $writer[$rb_minus($writer["length"], 1)];;
        } else {
        return nil
      }
    }, TMP_ChaosFlare_postSet_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_ChaosFlare_gameName_2 = function $$gameName() {
      var self = this;

      return "カオスフレア"
    }, TMP_ChaosFlare_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_ChaosFlare_gameType_3 = function $$gameType() {
      var self = this;

      return "Chaos Flare"
    }, TMP_ChaosFlare_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_ChaosFlare_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "失敗、成功の判定。差分値の計算も行います。\n" + "ファンブル時は達成値を-20します。\n"
    }, TMP_ChaosFlare_getHelpMessage_4.$$arity = 0);
    return (Opal.defn(self, '$check_2D6', TMP_ChaosFlare_check_2D6_5 = function $$check_2D6(total_n, dice_n, signOfInequality, diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var self = this, output = nil;

      
      output = "";
      if ($truthy($rb_le(dice_n, 2))) {
        
        total_n = $rb_minus(total_n, 20);
        output = $rb_plus(output, " ＞ ファンブル(-20)");};
      if (signOfInequality['$=='](">=")) {
        } else {
        return output
      };
      if ($truthy($rb_ge(total_n, diff))) {
        
        output = $rb_plus(output, " ＞ 成功");
        if ($truthy($rb_gt(total_n, diff))) {
          output = $rb_plus(output, "" + " ＞ 差分値" + ($rb_minus(total_n, diff)))};
        } else {
        
        output = $rb_plus(output, " ＞ 失敗");
        output = $rb_plus(output, "" + " ＞ 差分値" + ($rb_minus(total_n, diff)));
      };
      return output;
    }, TMP_ChaosFlare_check_2D6_5.$$arity = 8), nil) && 'check_2D6';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
