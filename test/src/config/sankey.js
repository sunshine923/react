/*
桑基图
  Highcharts JS v6.0.6 (2018-02-05)
 Sankey diagram module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
import Highcharts from 'highcharts'
(function(k) {
    "object" === typeof module && module.exports ? module.exports = k : k(Highcharts)
})(function(k) {
    (function(d) {
        var k = d.defined,
            f = d.each,
            w = d.extend,
            x = d.seriesType,
            q = d.Point;
        x("sankey", "column", {
            colorByPoint: !0,
            curveFactor: .33,
            dataLabels: {
                enabled: !0,
                backgroundColor: "none",
                crop: !1,
                nodeFormat: void 0,
                nodeFormatter: function() {
                    return this.point.name
                },
                format: void 0,
                formatter: function() {
                    return ""
                },
                inside: !0
            },
            linkOpacity: .5,
            nodeWidth: 20,
            nodePadding: 10,
            showInLegend: !1,
            states: {
                hover: {
                    linkOpacity: 1
                }
            },
            tooltip: {
                followPointer: !0,
                headerFormat: '\x3cspan style\x3d"font-size: 0.85em"\x3e{series.name}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: "{point.fromNode.name} \u2192 {point.toNode.name}: \x3cb\x3e{point.weight}\x3c/b\x3e\x3cbr/\x3e",
                nodeFormat: "{point.name}: \x3cb\x3e{point.sum}\x3c/b\x3e\x3cbr/\x3e"
            }
        }, {
            isCartesian: !1,
            forceDL: !0,
            createNode: function(c) {
                function a(a, b) {
                    return d.find(a, function(a) {
                        return a.id === b
                    })
                }
                var b = a(this.nodes, c),
                    e;
                b || (e = this.options.nodes && a(this.options.nodes, c), b = (new q).init(this, w({
                    className: "highcharts-node",
                    isNode: !0,
                    id: c,
                    y: 1
                }, e)), b.linksTo = [], b.linksFrom = [], b.formatPrefix = "node", b.name = b.name || b.id, b.getSum = function() {
                    var a = 0,
                        c = 0;
                    f(b.linksTo, function(c) {
                        a += c.weight
                    });
                    f(b.linksFrom, function(a) {
                        c += a.weight
                    });
                    return Math.max(a, c)
                }, b.offset = function(a, c) {
                    for (var g = 0, e = 0; e < b[c].length; e++) {
                        if (b[c][e] === a) return g;
                        g += b[c][e].weight
                    }
                }, b.hasShape = function() {
                    var a = 0;
                    f(b.linksTo, function(c) {
                        c.outgoing && a++
                    });
                    return !b.linksTo.length || a !== b.linksTo.length
                }, this.nodes.push(b));
                return b
            },
            createNodeColumn: function() {
                var c =
                    this.chart,
                    a = [],
                    b = this.options.nodePadding;
                a.sum = function() {
                    var a = 0;
                    f(this, function(c) {
                        a += c.getSum()
                    });
                    return a
                };
                a.offset = function(c, g) {
                    for (var e = 0, d = 0; d < a.length; d++) {
                        if (a[d] === c) return e + (c.options.offset || 0);
                        e += a[d].getSum() * g + b
                    }
                };
                a.top = function(e) {
                    for (var g = 0, d = 0; d < a.length; d++) 0 < d && (g += b), g += a[d].getSum() * e;
                    return (c.plotSizeY - g) / 2
                };
                return a
            },
            createNodeColumns: function() {
                var c = [];
                f(this.nodes, function(a) {
                    var b = 0,
                        e, g;
                    if (!d.defined(a.options.column))
                        if (0 === a.linksTo.length) a.column = 0;
                        else {
                            for (e =
                                0; e < a.linksTo.length; e++) g = a.linksTo[0], g.fromNode.column > b && (b = g.fromNode.column);
                            a.column = b + 1
                        }
                    c[a.column] || (c[a.column] = this.createNodeColumn());
                    c[a.column].push(a)
                }, this);
                return c
            },
            pointAttribs: function(c, a) {
                var b = this.options.linkOpacity;
                a && (b = this.options.states[a].linkOpacity || b);
                return {
                    fill: c.isNode ? c.color : d.color(c.color).setOpacity(b).get()
                }
            },
            generatePoints: function() {
                var c = {};
                d.Series.prototype.generatePoints.call(this);
                this.nodes || (this.nodes = []);
                this.colorCounter = 0;
                f(this.nodes, function(a) {
                    a.linksFrom.length =
                        0;
                    a.linksTo.length = 0
                });
                f(this.points, function(a) {
                    k(a.from) && (c[a.from] || (c[a.from] = this.createNode(a.from)), c[a.from].linksFrom.push(a), a.fromNode = c[a.from], a.color = a.options.color || c[a.from].color);
                    k(a.to) && (c[a.to] || (c[a.to] = this.createNode(a.to)), c[a.to].linksTo.push(a), a.toNode = c[a.to]);
                    a.name = a.name || a.id
                }, this)
            },
            translate: function() {
                this.processedXData || this.processData();
                this.generatePoints();
                this.nodeColumns = this.createNodeColumns();
                var c = this.chart,
                    a = c.inverted,
                    b = this.options,
                    d = 0,
                    g = b.nodeWidth,
                    k = this.nodeColumns,
                    r = (c.plotSizeX - g) / (k.length - 1),
                    t = (a ? -r : r) * b.curveFactor,
                    l = Infinity;
                f(this.nodeColumns, function(a) {
                    l = Math.min(l, (c.plotSizeY - (a.length - 1) * b.nodePadding) / a.sum())
                });
                f(this.nodeColumns, function(b) {
                    f(b, function(e) {
                        var q = e.getSum(),
                            u = q * l,
                            v = b.top(l) + b.offset(e, l),
                            m = a ? c.plotSizeX - d : d;
                        e.sum = q;
                        e.shapeType = "rect";
                        e.shapeArgs = a ? {
                            x: m - g,
                            y: c.plotSizeY - v - u,
                            width: g,
                            height: u
                        } : {
                            x: m,
                            y: v,
                            width: g,
                            height: u
                        };
                        e.shapeArgs.display = e.hasShape() ? "" : "none";
                        e.plotY = 1;
                        f(e.linksFrom, function(b) {
                            var d = b.weight *
                                l,
                                f = e.offset(b, "linksFrom") * l,
                                f = v + f,
                                h = b.toNode,
                                n = k[h.column].top(l) + h.offset(b, "linksTo") * l + k[h.column].offset(h, l),
                                p = g,
                                h = h.column * r,
                                q = b.outgoing;
                            a && (f = c.plotSizeY - f, n = c.plotSizeY - n, h = c.plotSizeX - h, p = -p, d = -d);
                            b.shapeType = "path";
                            b.shapeArgs = {
                                d: ["M", m + p, f, "C", m + p + t, f, h - t, n, h, n, "L", h + (q ? p : 0), n + d / 2, "L", h, n + d, "C", h - t, n + d, m + p + t, f + d, m + p, f + d, "z"]
                            };
                            b.dlBox = {
                                x: m + (h - m + p) / 2,
                                y: f + (n - f) / 2,
                                height: d,
                                width: 0
                            };
                            b.y = b.plotY = 1;
                            b.color || (b.color = e.color)
                        })
                    });
                    d += r
                }, this)
            },
            render: function() {
                var c = this.points;
                this.points =
                    this.points.concat(this.nodes);
                d.seriesTypes.column.prototype.render.call(this);
                this.points = c
            },
            animate: d.Series.prototype.animate
        }, {
            getClassName: function() {
                return "highcharts-link " + q.prototype.getClassName.call(this)
            },
            isValid: function() {
                return this.isNode || "number" === typeof this.weight
            }
        })
    })(k)
});