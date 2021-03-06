precision highp float;
uniform sampler2D velocity;
uniform float dt;
uniform float scale;
varying vec2 uv;
uniform float visualizerMode;

vec2 velocityAt(uv){
    return texture2D(velocity, uv-texture2D(velocity, uv).xy*dt);
}

void main(){
    gl_FragColor = vec4(scale*velocityAt(uv), 1.0, 1.0);
    gl_FragColor[0] = gl_FragColor[0] * 0.1;
}
