(function() {
    var currentPlayer = "player1";

    $(".column").on("click", function(e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.find(".slot");
        var addClass = false;
        var allSlots = $("#board").find(".slot");
        console.log(allSlots);

        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                addClass = true;
                break;
            }
        }
        if (!addClass) {
            return;
        }

        function checkForVictory1(allSlots) {
            if (allSlots.eq(5).hasClass(currentPlayer)) {
                if (allSlots.eq(11).hasClass(currentPlayer)) {
                    if (allSlots.eq(17).hasClass(currentPlayer)) {
                        if (allSlots.eq(23).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            $(".cool").css("visibility", "visible");
                            $(".cool2").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory2(allSlots) {
            if (allSlots.eq(23).hasClass(currentPlayer)) {
                if (allSlots.eq(29).hasClass(currentPlayer)) {
                    if (allSlots.eq(35).hasClass(currentPlayer)) {
                        if (allSlots.eq(41).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            $(".geek").css("visibility", "visible");
                            $(".geek2").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory3(allSlots) {
            if (allSlots.eq(0).hasClass(currentPlayer)) {
                if (allSlots.eq(6).hasClass(currentPlayer)) {
                    if (allSlots.eq(12).hasClass(currentPlayer)) {
                        if (allSlots.eq(18).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory4(allSlots) {
            if (allSlots.eq(1).hasClass(currentPlayer)) {
                if (allSlots.eq(7).hasClass(currentPlayer)) {
                    if (allSlots.eq(13).hasClass(currentPlayer)) {
                        if (allSlots.eq(19).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory5(allSlots) {
            if (allSlots.eq(2).hasClass(currentPlayer)) {
                if (allSlots.eq(8).hasClass(currentPlayer)) {
                    if (allSlots.eq(14).hasClass(currentPlayer)) {
                        if (allSlots.eq(20).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory6(allSlots) {
            if (allSlots.eq(3).hasClass(currentPlayer)) {
                if (allSlots.eq(9).hasClass(currentPlayer)) {
                    if (allSlots.eq(15).hasClass(currentPlayer)) {
                        if (allSlots.eq(21).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory7(allSlots) {
            if (allSlots.eq(4).hasClass(currentPlayer)) {
                if (allSlots.eq(10).hasClass(currentPlayer)) {
                    if (allSlots.eq(16).hasClass(currentPlayer)) {
                        if (allSlots.eq(22).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory8(allSlots) {
            if (allSlots.eq(6).hasClass(currentPlayer)) {
                if (allSlots.eq(12).hasClass(currentPlayer)) {
                    if (allSlots.eq(18).hasClass(currentPlayer)) {
                        if (allSlots.eq(24).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory9(allSlots) {
            if (allSlots.eq(7).hasClass(currentPlayer)) {
                if (allSlots.eq(13).hasClass(currentPlayer)) {
                    if (allSlots.eq(19).hasClass(currentPlayer)) {
                        if (allSlots.eq(25).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory10(allSlots) {
            if (allSlots.eq(8).hasClass(currentPlayer)) {
                if (allSlots.eq(14).hasClass(currentPlayer)) {
                    if (allSlots.eq(20).hasClass(currentPlayer)) {
                        if (allSlots.eq(26).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory11(allSlots) {
            if (allSlots.eq(9).hasClass(currentPlayer)) {
                if (allSlots.eq(15).hasClass(currentPlayer)) {
                    if (allSlots.eq(21).hasClass(currentPlayer)) {
                        if (allSlots.eq(27).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory12(allSlots) {
            if (allSlots.eq(10).hasClass(currentPlayer)) {
                if (allSlots.eq(16).hasClass(currentPlayer)) {
                    if (allSlots.eq(22).hasClass(currentPlayer)) {
                        if (allSlots.eq(28).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory13(allSlots) {
            if (allSlots.eq(11).hasClass(currentPlayer)) {
                if (allSlots.eq(17).hasClass(currentPlayer)) {
                    if (allSlots.eq(23).hasClass(currentPlayer)) {
                        if (allSlots.eq(29).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory14(allSlots) {
            if (allSlots.eq(12).hasClass(currentPlayer)) {
                if (allSlots.eq(18).hasClass(currentPlayer)) {
                    if (allSlots.eq(24).hasClass(currentPlayer)) {
                        if (allSlots.eq(30).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory15(allSlots) {
            if (allSlots.eq(13).hasClass(currentPlayer)) {
                if (allSlots.eq(19).hasClass(currentPlayer)) {
                    if (allSlots.eq(25).hasClass(currentPlayer)) {
                        if (allSlots.eq(31).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory16(allSlots) {
            if (allSlots.eq(14).hasClass(currentPlayer)) {
                if (allSlots.eq(20).hasClass(currentPlayer)) {
                    if (allSlots.eq(26).hasClass(currentPlayer)) {
                        if (allSlots.eq(32).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory17(allSlots) {
            if (allSlots.eq(15).hasClass(currentPlayer)) {
                if (allSlots.eq(21).hasClass(currentPlayer)) {
                    if (allSlots.eq(27).hasClass(currentPlayer)) {
                        if (allSlots.eq(33).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory18(allSlots) {
            if (allSlots.eq(16).hasClass(currentPlayer)) {
                if (allSlots.eq(22).hasClass(currentPlayer)) {
                    if (allSlots.eq(28).hasClass(currentPlayer)) {
                        if (allSlots.eq(34).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory19(allSlots) {
            if (allSlots.eq(17).hasClass(currentPlayer)) {
                if (allSlots.eq(23).hasClass(currentPlayer)) {
                    if (allSlots.eq(29).hasClass(currentPlayer)) {
                        if (allSlots.eq(35).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory20(allSlots) {
            if (allSlots.eq(18).hasClass(currentPlayer)) {
                if (allSlots.eq(24).hasClass(currentPlayer)) {
                    if (allSlots.eq(30).hasClass(currentPlayer)) {
                        if (allSlots.eq(36).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory21(allSlots) {
            if (allSlots.eq(19).hasClass(currentPlayer)) {
                if (allSlots.eq(25).hasClass(currentPlayer)) {
                    if (allSlots.eq(31).hasClass(currentPlayer)) {
                        if (allSlots.eq(37).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory22(allSlots) {
            if (allSlots.eq(20).hasClass(currentPlayer)) {
                if (allSlots.eq(26).hasClass(currentPlayer)) {
                    if (allSlots.eq(32).hasClass(currentPlayer)) {
                        if (allSlots.eq(38).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory23(allSlots) {
            if (allSlots.eq(21).hasClass(currentPlayer)) {
                if (allSlots.eq(27).hasClass(currentPlayer)) {
                    if (allSlots.eq(33).hasClass(currentPlayer)) {
                        if (allSlots.eq(39).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory24(allSlots) {
            if (allSlots.eq(22).hasClass(currentPlayer)) {
                if (allSlots.eq(28).hasClass(currentPlayer)) {
                    if (allSlots.eq(34).hasClass(currentPlayer)) {
                        if (allSlots.eq(40).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory25(allSlots) {
            if (allSlots.eq(0).hasClass(currentPlayer)) {
                if (allSlots.eq(1).hasClass(currentPlayer)) {
                    if (allSlots.eq(2).hasClass(currentPlayer)) {
                        if (allSlots.eq(3).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory26(allSlots) {
            if (allSlots.eq(1).hasClass(currentPlayer)) {
                if (allSlots.eq(2).hasClass(currentPlayer)) {
                    if (allSlots.eq(3).hasClass(currentPlayer)) {
                        if (allSlots.eq(4).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory27(allSlots) {
            if (allSlots.eq(2).hasClass(currentPlayer)) {
                if (allSlots.eq(3).hasClass(currentPlayer)) {
                    if (allSlots.eq(4).hasClass(currentPlayer)) {
                        if (allSlots.eq(5).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory28(allSlots) {
            if (allSlots.eq(6).hasClass(currentPlayer)) {
                if (allSlots.eq(7).hasClass(currentPlayer)) {
                    if (allSlots.eq(8).hasClass(currentPlayer)) {
                        if (allSlots.eq(9).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory29(allSlots) {
            if (allSlots.eq(7).hasClass(currentPlayer)) {
                if (allSlots.eq(8).hasClass(currentPlayer)) {
                    if (allSlots.eq(9).hasClass(currentPlayer)) {
                        if (allSlots.eq(10).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory30(allSlots) {
            if (allSlots.eq(8).hasClass(currentPlayer)) {
                if (allSlots.eq(9).hasClass(currentPlayer)) {
                    if (allSlots.eq(10).hasClass(currentPlayer)) {
                        if (allSlots.eq(11).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory31(allSlots) {
            if (allSlots.eq(12).hasClass(currentPlayer)) {
                if (allSlots.eq(13).hasClass(currentPlayer)) {
                    if (allSlots.eq(14).hasClass(currentPlayer)) {
                        if (allSlots.eq(15).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory32(allSlots) {
            if (allSlots.eq(13).hasClass(currentPlayer)) {
                if (allSlots.eq(14).hasClass(currentPlayer)) {
                    if (allSlots.eq(15).hasClass(currentPlayer)) {
                        if (allSlots.eq(16).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory33(allSlots) {
            if (allSlots.eq(14).hasClass(currentPlayer)) {
                if (allSlots.eq(15).hasClass(currentPlayer)) {
                    if (allSlots.eq(16).hasClass(currentPlayer)) {
                        if (allSlots.eq(17).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory34(allSlots) {
            if (allSlots.eq(18).hasClass(currentPlayer)) {
                if (allSlots.eq(19).hasClass(currentPlayer)) {
                    if (allSlots.eq(20).hasClass(currentPlayer)) {
                        if (allSlots.eq(21).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory35(allSlots) {
            if (allSlots.eq(19).hasClass(currentPlayer)) {
                if (allSlots.eq(20).hasClass(currentPlayer)) {
                    if (allSlots.eq(21).hasClass(currentPlayer)) {
                        if (allSlots.eq(22).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory36(allSlots) {
            if (allSlots.eq(20).hasClass(currentPlayer)) {
                if (allSlots.eq(21).hasClass(currentPlayer)) {
                    if (allSlots.eq(22).hasClass(currentPlayer)) {
                        if (allSlots.eq(23).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory37(allSlots) {
            if (allSlots.eq(24).hasClass(currentPlayer)) {
                if (allSlots.eq(25).hasClass(currentPlayer)) {
                    if (allSlots.eq(26).hasClass(currentPlayer)) {
                        if (allSlots.eq(27).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory38(allSlots) {
            if (allSlots.eq(25).hasClass(currentPlayer)) {
                if (allSlots.eq(26).hasClass(currentPlayer)) {
                    if (allSlots.eq(27).hasClass(currentPlayer)) {
                        if (allSlots.eq(28).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory39(allSlots) {
            if (allSlots.eq(26).hasClass(currentPlayer)) {
                if (allSlots.eq(27).hasClass(currentPlayer)) {
                    if (allSlots.eq(28).hasClass(currentPlayer)) {
                        if (allSlots.eq(29).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory40(allSlots) {
            if (allSlots.eq(30).hasClass(currentPlayer)) {
                if (allSlots.eq(31).hasClass(currentPlayer)) {
                    if (allSlots.eq(32).hasClass(currentPlayer)) {
                        if (allSlots.eq(33).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory41(allSlots) {
            if (allSlots.eq(31).hasClass(currentPlayer)) {
                if (allSlots.eq(32).hasClass(currentPlayer)) {
                    if (allSlots.eq(33).hasClass(currentPlayer)) {
                        if (allSlots.eq(34).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory42(allSlots) {
            if (allSlots.eq(32).hasClass(currentPlayer)) {
                if (allSlots.eq(33).hasClass(currentPlayer)) {
                    if (allSlots.eq(34).hasClass(currentPlayer)) {
                        if (allSlots.eq(35).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory43(allSlots) {
            if (allSlots.eq(36).hasClass(currentPlayer)) {
                if (allSlots.eq(37).hasClass(currentPlayer)) {
                    if (allSlots.eq(38).hasClass(currentPlayer)) {
                        if (allSlots.eq(39).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory44(allSlots) {
            if (allSlots.eq(37).hasClass(currentPlayer)) {
                if (allSlots.eq(38).hasClass(currentPlayer)) {
                    if (allSlots.eq(39).hasClass(currentPlayer)) {
                        if (allSlots.eq(40).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory45(allSlots) {
            if (allSlots.eq(38).hasClass(currentPlayer)) {
                if (allSlots.eq(39).hasClass(currentPlayer)) {
                    if (allSlots.eq(40).hasClass(currentPlayer)) {
                        if (allSlots.eq(41).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory46(allSlots) {
            if (allSlots.eq(3).hasClass(currentPlayer)) {
                if (allSlots.eq(8).hasClass(currentPlayer)) {
                    if (allSlots.eq(13).hasClass(currentPlayer)) {
                        if (allSlots.eq(18).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory47(allSlots) {
            if (allSlots.eq(4).hasClass(currentPlayer)) {
                if (allSlots.eq(9).hasClass(currentPlayer)) {
                    if (allSlots.eq(14).hasClass(currentPlayer)) {
                        if (allSlots.eq(19).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory48(allSlots) {
            if (allSlots.eq(5).hasClass(currentPlayer)) {
                if (allSlots.eq(10).hasClass(currentPlayer)) {
                    if (allSlots.eq(15).hasClass(currentPlayer)) {
                        if (allSlots.eq(20).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory49(allSlots) {
            if (allSlots.eq(11).hasClass(currentPlayer)) {
                if (allSlots.eq(16).hasClass(currentPlayer)) {
                    if (allSlots.eq(21).hasClass(currentPlayer)) {
                        if (allSlots.eq(26).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory50(allSlots) {
            if (allSlots.eq(17).hasClass(currentPlayer)) {
                if (allSlots.eq(22).hasClass(currentPlayer)) {
                    if (allSlots.eq(27).hasClass(currentPlayer)) {
                        if (allSlots.eq(32).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory51(allSlots) {
            if (allSlots.eq(23).hasClass(currentPlayer)) {
                if (allSlots.eq(28).hasClass(currentPlayer)) {
                    if (allSlots.eq(33).hasClass(currentPlayer)) {
                        if (allSlots.eq(38).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory52(allSlots) {
            if (allSlots.eq(9).hasClass(currentPlayer)) {
                if (allSlots.eq(14).hasClass(currentPlayer)) {
                    if (allSlots.eq(19).hasClass(currentPlayer)) {
                        if (allSlots.eq(24).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory53(allSlots) {
            if (allSlots.eq(10).hasClass(currentPlayer)) {
                if (allSlots.eq(15).hasClass(currentPlayer)) {
                    if (allSlots.eq(20).hasClass(currentPlayer)) {
                        if (allSlots.eq(25).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory54(allSlots) {
            if (allSlots.eq(16).hasClass(currentPlayer)) {
                if (allSlots.eq(21).hasClass(currentPlayer)) {
                    if (allSlots.eq(26).hasClass(currentPlayer)) {
                        if (allSlots.eq(31).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory55(allSlots) {
            if (allSlots.eq(22).hasClass(currentPlayer)) {
                if (allSlots.eq(27).hasClass(currentPlayer)) {
                    if (allSlots.eq(32).hasClass(currentPlayer)) {
                        if (allSlots.eq(37).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory56(allSlots) {
            if (allSlots.eq(15).hasClass(currentPlayer)) {
                if (allSlots.eq(20).hasClass(currentPlayer)) {
                    if (allSlots.eq(25).hasClass(currentPlayer)) {
                        if (allSlots.eq(30).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory57(allSlots) {
            if (allSlots.eq(21).hasClass(currentPlayer)) {
                if (allSlots.eq(26).hasClass(currentPlayer)) {
                    if (allSlots.eq(31).hasClass(currentPlayer)) {
                        if (allSlots.eq(36).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory58(allSlots) {
            if (allSlots.eq(18).hasClass(currentPlayer)) {
                if (allSlots.eq(25).hasClass(currentPlayer)) {
                    if (allSlots.eq(32).hasClass(currentPlayer)) {
                        if (allSlots.eq(39).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory59(allSlots) {
            if (allSlots.eq(12).hasClass(currentPlayer)) {
                if (allSlots.eq(19).hasClass(currentPlayer)) {
                    if (allSlots.eq(26).hasClass(currentPlayer)) {
                        if (allSlots.eq(33).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory60(allSlots) {
            if (allSlots.eq(6).hasClass(currentPlayer)) {
                if (allSlots.eq(13).hasClass(currentPlayer)) {
                    if (allSlots.eq(20).hasClass(currentPlayer)) {
                        if (allSlots.eq(27).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory61(allSlots) {
            if (allSlots.eq(0).hasClass(currentPlayer)) {
                if (allSlots.eq(7).hasClass(currentPlayer)) {
                    if (allSlots.eq(14).hasClass(currentPlayer)) {
                        if (allSlots.eq(21).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory62(allSlots) {
            if (allSlots.eq(1).hasClass(currentPlayer)) {
                if (allSlots.eq(8).hasClass(currentPlayer)) {
                    if (allSlots.eq(15).hasClass(currentPlayer)) {
                        if (allSlots.eq(22).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory63(allSlots) {
            if (allSlots.eq(2).hasClass(currentPlayer)) {
                if (allSlots.eq(9).hasClass(currentPlayer)) {
                    if (allSlots.eq(16).hasClass(currentPlayer)) {
                        if (allSlots.eq(23).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }
        function checkForVictory64(allSlots) {
            if (allSlots.eq(19).hasClass(currentPlayer)) {
                if (allSlots.eq(26).hasClass(currentPlayer)) {
                    if (allSlots.eq(33).hasClass(currentPlayer)) {
                        if (allSlots.eq(40).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }
        function checkForVictory65(allSlots) {
            if (allSlots.eq(13).hasClass(currentPlayer)) {
                if (allSlots.eq(20).hasClass(currentPlayer)) {
                    if (allSlots.eq(27).hasClass(currentPlayer)) {
                        if (allSlots.eq(34).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory66(allSlots) {
            if (allSlots.eq(7).hasClass(currentPlayer)) {
                if (allSlots.eq(14).hasClass(currentPlayer)) {
                    if (allSlots.eq(21).hasClass(currentPlayer)) {
                        if (allSlots.eq(28).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory67(allSlots) {
            if (allSlots.eq(8).hasClass(currentPlayer)) {
                if (allSlots.eq(15).hasClass(currentPlayer)) {
                    if (allSlots.eq(22).hasClass(currentPlayer)) {
                        if (allSlots.eq(29).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory68(allSlots) {
            if (allSlots.eq(20).hasClass(currentPlayer)) {
                if (allSlots.eq(27).hasClass(currentPlayer)) {
                    if (allSlots.eq(34).hasClass(currentPlayer)) {
                        if (allSlots.eq(41).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        function checkForVictory69(allSlots) {
            if (allSlots.eq(14).hasClass(currentPlayer)) {
                if (allSlots.eq(21).hasClass(currentPlayer)) {
                    if (allSlots.eq(28).hasClass(currentPlayer)) {
                        if (allSlots.eq(35).hasClass(currentPlayer)) {
                            $(".win").css("visibility", "visible");
                            $(".reset").css("visibility", "visible");
                            console.log("winner");
                        }
                    }
                }
            }
        }

        $(".reset").on("click", function(e) {
            location.reload();
        });

        $(".demo").on("click", function(e) {
            console.log("fire");
            $(".fireworks").fireworks({
                sound: true,
                opacity: 0.9,
                width: "100%",
                height: "100%"
            });
        });

        function switchPlayers() {
            if (currentPlayer == "player1") {
                currentPlayer = "player2";
            } else {
                currentPlayer = "player1";
            }
        }

        checkForVictory1(allSlots);
        checkForVictory2(allSlots);
        checkForVictory3(allSlots);
        checkForVictory4(allSlots);
        checkForVictory5(allSlots);
        checkForVictory6(allSlots);
        checkForVictory7(allSlots);
        checkForVictory8(allSlots);
        checkForVictory9(allSlots);
        checkForVictory10(allSlots);
        checkForVictory11(allSlots);
        checkForVictory12(allSlots);
        checkForVictory13(allSlots);
        checkForVictory14(allSlots);
        checkForVictory15(allSlots);
        checkForVictory16(allSlots);
        checkForVictory17(allSlots);
        checkForVictory18(allSlots);
        checkForVictory19(allSlots);
        checkForVictory20(allSlots);
        checkForVictory21(allSlots);
        checkForVictory22(allSlots);
        checkForVictory23(allSlots);
        checkForVictory24(allSlots);
        checkForVictory25(allSlots);
        checkForVictory26(allSlots);
        checkForVictory27(allSlots);
        checkForVictory28(allSlots);
        checkForVictory29(allSlots);
        checkForVictory30(allSlots);
        checkForVictory31(allSlots);
        checkForVictory32(allSlots);
        checkForVictory33(allSlots);
        checkForVictory34(allSlots);
        checkForVictory35(allSlots);
        checkForVictory36(allSlots);
        checkForVictory37(allSlots);
        checkForVictory38(allSlots);
        checkForVictory39(allSlots);
        checkForVictory40(allSlots);
        checkForVictory41(allSlots);
        checkForVictory42(allSlots);
        checkForVictory43(allSlots);
        checkForVictory44(allSlots);
        checkForVictory45(allSlots);
        checkForVictory46(allSlots);
        checkForVictory47(allSlots);
        checkForVictory48(allSlots);
        checkForVictory49(allSlots);
        checkForVictory50(allSlots);
        checkForVictory51(allSlots);
        checkForVictory52(allSlots);
        checkForVictory53(allSlots);
        checkForVictory54(allSlots);
        checkForVictory55(allSlots);
        checkForVictory56(allSlots);
        checkForVictory57(allSlots);
        checkForVictory58(allSlots);
        checkForVictory59(allSlots);
        checkForVictory60(allSlots);
        checkForVictory61(allSlots);
        checkForVictory62(allSlots);
        checkForVictory63(allSlots);
        checkForVictory64(allSlots);
        checkForVictory65(allSlots);
        checkForVictory66(allSlots);
        checkForVictory67(allSlots);
        checkForVictory68(allSlots);
        checkForVictory69(allSlots);

        switchPlayers();
    });
})();
