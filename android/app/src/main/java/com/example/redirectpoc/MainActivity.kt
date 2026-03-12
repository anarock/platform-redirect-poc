package com.example.redirectpoc

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material3.Button
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import com.example.redirectpoc.ui.theme.RedirectPOCTheme

// Android emulator: use 10.0.2.2 to reach host machine. Real device: use your computer's IP (e.g. 192.168.0.109).
private const val HOST = "10.0.2.2"
private const val FILE_URL = "http://$HOST:4000/file"

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            RedirectPOCTheme {
                FileScreen(
                    fileUrl = FILE_URL,
                    onOpenFile = { openFileUrl(FILE_URL) },
                )
            }
        }
    }

    private fun openFileUrl(url: String) {
        try {
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
            startActivity(Intent.createChooser(intent, "Open with"))
        } catch (e: Exception) {
            Toast.makeText(
                this,
                "Could not open URL. On a real device, ensure server is running on your computer and use its IP.",
                Toast.LENGTH_LONG,
            ).show()
        }
    }
}

@Composable
fun FileScreen(
    fileUrl: String,
    onOpenFile: () -> Unit,
    modifier: Modifier = Modifier,
) {
    Surface(modifier = modifier.fillMaxSize()) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
        ) {
            AsyncImage(
                model = fileUrl,
                contentDescription = "Image from server",
                modifier = Modifier
                    .fillMaxWidth()
                    .height(300.dp),
                contentScale = ContentScale.Fit,
            )
            Button(
                onClick = onOpenFile,
                modifier = Modifier
                    .padding(top = 24.dp)
                    .widthIn(min = 160.dp),
            ) {
                Text("Open File")
            }
        }
    }
}
